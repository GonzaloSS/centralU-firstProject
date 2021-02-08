import { Injectable } from '@angular/core';
import { Response } from '../models/incidencia';
import { Contact } from '../models/contact';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

var headers = new HttpHeaders({

  'Content-Type':'application/json',

  'Accept' : 'application/json'

});




let config = { headers : new HttpHeaders().set('Content-Type', 'application/json')};



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
  constructor(private httpClient: HttpClient) { }

  

  getIncidencias(): Observable<Contact[]> {
    return this.httpClient.post<Contact[]>("http://localhost:8069/api/getContact", postData, options)
    .pipe(
      
      tap(incidencias => console.log('fetched incidencias')),
      catchError(this.handleError('getIncidencias', []))
    );
  }


  addContact(contact: Contact){
    this.httpClient.post("http://localhost:8069/api/createCompany",
    {jsonrpc: "2.0", params : { 'name': contact.name, 'company_type': contact.company_type, 'function': contact.function,
    'type': contact.type, 'street': contact.street, 'city': contact.city, 'zip': contact.zip} },
    config).subscribe(data => {
      console.log(data);
    }, err =>{
      console.log(err);
    });

   }

   deleteContact(id: number){
    this.httpClient.post("http://localhost:8069/api/deleteContact",
    {jsonrpc: "2.0", params : { "id": id} },
    config).subscribe(data => {
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

  
  setCurrentContactId(id: number) {
    console.log(id)
    this.currentContactId = id;
  }

  getCurrentContactId(): number {
    return this.currentContactId;
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
    return this.httpClient.post("http://localhost:8069/api/getASingleContact",
    {jsonrpc: "2.0", params : { 'id': id} },
    config).pipe(
      tap(data => {
      console.log(data);
    }, err =>{
      console.log(err);
    }));
  }




  updateProduct(id: number, contact: Contact) {
    this.httpClient.post("http://localhost:8069/api/updateContact",
    {jsonrpc: "2.0", params : { 'id': id, 'name': contact.name, 'company_type': contact.company_type, 'function': contact.function,
    'type': contact.type, 'street': contact.street, 'city': contact.city, 'zip': contact.zip} },
    config).subscribe(data => {
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



