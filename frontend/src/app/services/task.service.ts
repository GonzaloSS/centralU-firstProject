import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Task } from '../models/task';



let postData = {
  jsonrpc: "2.0",
  params: {}
}



@Injectable({
  providedIn: 'root'
})
export class TaskService {
  headers: HttpHeaders;
  currentIdUser: number;

  constructor(
    private httpClient: HttpClient
  ) { }

  setUserId(user_id: number){
    this.currentIdUser = user_id;
  }
  getCurrentUser(){
    return this.currentIdUser;
  }

  getTask(): Observable<Task[]> {
    
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Openerp-Session-Id": localStorage.getItem('session_id')
  })
    return this.httpClient.post<Task[]>("http://localhost:8069/api/getTask", postData,  {headers: this.headers})
    .pipe(
      
      tap(incidencias => console.log('fetched Tasks')),
      catchError(this.handleError('getTask', []))
    );
  }


  getTaskByEmployee(): Observable<Task[]> {
    
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Openerp-Session-Id": localStorage.getItem('session_id')
  })
 
    return this.httpClient.post<Task[]>("http://localhost:8069/api/getEmployeeTask", 
    
    {jsonrpc: "2.0", params : { "user_id": parseInt(localStorage.getItem("id"))} },
      {headers: this.headers})
    .pipe(
      
      tap(incidencias => console.log('fetched Tasks')),
      catchError(this.handleError('getTask', []))
    );
  }


  addTask(user_id: number, task: Task) {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Openerp-Session-Id": localStorage.getItem('session_id')
  })
    this.httpClient.post("http://localhost:8069/api/createTask",
      {
        jsonrpc: "2.0", params: {
          "name":task.name, "user_id": user_id,
           "description":task.description, "stage_id": 2,
            "date_deadline": task.date_deadline
        }
      },
      { headers: this.headers }).subscribe(data => {
        console.log(task.name, user_id, task.description)
        console.log(data);
      }, err => {
        console.log(err);
      });

  }


  updateTask(id: number, user_id: number, task: Task) {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Openerp-Session-Id": localStorage.getItem('session_id')
  })
    this.httpClient.post("http://localhost:8069/api/updateTask",
      {
        jsonrpc: "2.0", params: {
          "id": id, "name": task.name, "project_id": task.project_id, "user_id": user_id, 
          "date_deadline": task.date_deadline,"description": task.description
        }
      },
      { headers: this.headers }).subscribe(data => {
        console.log(data);
      }, err => {
        console.log(err);
      });

  }

  deleteTask(id: number){
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Openerp-Session-Id": localStorage.getItem('session_id')
  })
    this.httpClient.post("http://localhost:8069/api/deleteTask",
    {jsonrpc: "2.0", params : { "id": id} },
    {headers: this.headers}).subscribe(data => {
      console.log(data);
    }, err =>{
      console.log(err);
    });
  }



  private handleError<T>(operation = 'operation', result ?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
