import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../models/user';


let postData = {
  jsonrpc: "2.0",
  params: {}
}



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  headers: HttpHeaders;

  constructor(
    private httpClient: HttpClient
  ) { }



  addUser(user: User) {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Openerp-Session-Id": localStorage.getItem('session_id')
  })
    this.httpClient.post("http://localhost:8069/api/createUser",
      {
        jsonrpc: "2.0", params: {
          'name': user.name, 'login': user.login,
          'function': user.function, 'password': user.password,
        }
      },
      { headers: this.headers }).subscribe(data => {
        console.log(data);
      }, err => {
        console.log(err);
      });

  }


  
  getUsers(): Observable<User[]> {

    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Openerp-Session-Id": localStorage.getItem('session_id')
  })
    return this.httpClient.post<User[]>("http://localhost:8069/api/getUsers", 
    postData, { headers: this.headers })
      .pipe(

        tap(products => console.log('fetched users')),
        catchError(this.handleError('getUsers', []))
      );
  }


  getUserById() {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Openerp-Session-Id": localStorage.getItem('session_id')
  })
    return this.httpClient.post("http://localhost:8069/api/getASingleUser",
      { jsonrpc: "2.0", params: { 'id': localStorage.getItem('id') } },
      { headers: this.headers }).pipe(
        tap(data => {
          console.log("hola")
          console.log(data);
        }, err => {
          console.log(err);
        }));
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
