import { Injectable, Inject } from '@angular/core';
import { Contact } from '../models/contact';
import { Login } from '../models/login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { CookieService} from 'ngx-cookie-service';
import { User } from '../models/user';
import { LocalStorage } from '@ngx-pwa/local-storage';



var headers = new HttpHeaders({
  
  
  'Content-Type':'application/json',

  'Accept' : 'application/json'

});




//let config = { headers : new HttpHeaders().set('Content-Type', 'application/json')};



let options = {

  headers: headers
}

let postData = {
  jsonrpc: "2.0",
  params: {}
}


@Injectable({
  providedIn: 'root'
})
export class CentralUService {
  currentContactId: number;
  currentContactName : string;
  currentContactCompany : string;
  currentContactType : string;
  currentContactStreet : string;
  currentContactCity : string;
  currentContactZip : string;
  currentContactFunction: string;
  headers: HttpHeaders
  currentProductId: number;
  session: User[];
  session_id: string;
  sessionActive: boolean;

  constructor(
    private httpClient: HttpClient,
    private cookieSvc: CookieService,
    private localStorage: LocalStorage) { 


    
  }



  getIncidencias(): Observable<Contact[]> {
    
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Openerp-Session-Id": localStorage.getItem('session_id')
  })
    return this.httpClient.post<Contact[]>("http://localhost:8069/api/getContact", postData,  {headers: this.headers})
    .pipe(
      
      tap(incidencias => console.log('fetched incidencias', this.cookieSvc.get('session_id'))),
      catchError(this.handleError('getIncidencias', []))
    );
  }

  logOut(){
    this.headers = new HttpHeaders({
      "Content-Type": "application/json"
  })

  return this.httpClient.post<Contact[]>("http://localhost:8069/web/session/destroy", postData,  {headers: this.headers})
    .subscribe(data =>{
      console.log(data)
      localStorage.removeItem('session_id');
      localStorage.removeItem('isAdmin');
      localStorage.removeItem('id')
      this.sessionActive = false;
      window.location.reload();
      
    }), err =>{
      console.log(err)
    }
  }


  addContact(contact: Contact){
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Openerp-Session-Id": localStorage.getItem('session_id')
  })
    this.httpClient.post("http://localhost:8069/api/createCompany",
    {jsonrpc: "2.0", params : { 'name': contact.name, 'company_type': contact.company_type, 'function': contact.function,
    'type': contact.type, 'street': contact.street, 'city': contact.city, 'zip': contact.zip} },
    {headers: this.headers}).subscribe(data => {
      console.log(data);
    }, err =>{
      console.log(err);
    });

   }

   deleteContact(id: number){
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Openerp-Session-Id": localStorage.getItem('session_id')
  })
    this.httpClient.post("http://localhost:8069/api/deleteContact",
    {jsonrpc: "2.0", params : { "id": id} },
    {headers: this.headers}).subscribe(data => {
      console.log(data);
    }, err =>{
      console.log(err);
    });
  }

setCurrentContact(id: number, name: string, company_type: string, functionn: string, type: string, street: string,
  city: string, zip: string){
    this.currentContactId = id;
    this.currentContactName = name;
    this.currentContactCompany = company_type;
    this.currentContactFunction = functionn;
    this.currentContactType = type;
    this.currentContactStreet = street;
    this.currentContactCity = city;
    this.currentContactZip = zip;

  }

  loginUser(user: Login){
    this.httpClient.post("http://localhost:8069/web/session/authenticate",
    {jsonrpc: "2.0", params : { 'db': "centralU", 'login': user.username, 'password': user.password } },
    options).subscribe((data : any) =>{
     this.session = data["result"];
     console.log(this.session);
     localStorage.setItem('session_id', this.session["session_id"]);
     localStorage.setItem('isAdmin', this.session["is_admin"]);
     localStorage.setItem('id', this.session["user_id"]);
     window.location.reload()
    })
  }

  
  setCurrentContactId(id: number) {
    console.log(id)
    this.currentContactId = id;
  }

  setCurrentProductId(id: number) {
    console.log(id)
    this.currentProductId = id;
  }

  getCurrentContactId(): number {
    return this.currentContactId;
  }

  getCurrentProductId(): number {
    return this.currentProductId;
  }


  getCurrentName(): string{
    return this.currentContactName;
  }
  getCurrentCompany(): string{
    return this.currentContactCompany;
  }
  getCurrentFunction(): string{
    return this.currentContactFunction;
  }
  getCurrentType(): string{
    return this.currentContactType;
  }
  getCurrentStreet(): string{
    return this.currentContactStreet;
  }
  getCurrentCity(): string{
    return this.currentContactCity;
  }
  getCurrentZip(): string{
    return this.currentContactZip;
  }

  getContactById(id: number){
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Openerp-Session-Id": localStorage.getItem('session_id')
  })
    return this.httpClient.post("http://localhost:8069/api/getASingleContact",
    {jsonrpc: "2.0", params : { 'id': id} },
    {headers: this.headers}).pipe(
      tap(data => {
      console.log(data);
    }, err =>{
      console.log(err);
    }));
  }

  getProductById(id: number){
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Openerp-Session-Id": localStorage.getItem('session_id')
  })
    return this.httpClient.post("http://localhost:8069/api/getASingleProduct",
    {jsonrpc: "2.0", params : { 'id': id} },
    {headers: this.headers}).pipe(
      tap(data => {
      console.log(data);
    }, err =>{
      console.log(err);
    }));
  }




  updateContact(id: number, contact: Contact) {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Openerp-Session-Id": localStorage.getItem('session_id')
  })
    this.httpClient.post("http://localhost:8069/api/updateContact",
    {jsonrpc: "2.0", params : { 'id': id, 'name': contact.name, 'company_type': contact.company_type, 'function': contact.function,
    'type': contact.type, 'street': contact.street, 'city': contact.city, 'zip': contact.zip} },
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



