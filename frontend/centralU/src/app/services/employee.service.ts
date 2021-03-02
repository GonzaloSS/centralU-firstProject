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

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
