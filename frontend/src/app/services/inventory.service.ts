import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Inventory } from '../models/inventory';

let postData = {
  jsonrpc: "2.0",
  params: {}
}


@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  [x: string]: any;
  currentInventoryId: number;
  currentName: string;
  currentDate: Date;
  currentLocations: number;
  currentProducts: number;
  currentAccounting_date: Date;
  currentExhausted: number;
  currentPrefillCountedQuantity: string;
  currentState: string;

  headers: HttpHeaders;


  constructor( private httpClient: HttpClient) { }

  getAdjustments(): Observable<Inventory[]> {

    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Openerp-Session-Id": localStorage.getItem('session_id')
  })
    return this.httpClient.post<Inventory[]>("http://localhost:8069/api/getInventory", postData, { headers: this.headers })
      .pipe(

        tap(inventory => console.log('fetched inventories')),
        catchError(this.handleError('getAdjustmens', []))
      );
  }

  addAdjustment(inventory: Inventory) {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Openerp-Session-Id": localStorage.getItem('session_id')
  })
    this.httpClient.post("http://localhost:8069/api/createInventory",
      {
        jsonrpc: "2.0", params: {
          'name': inventory.name,
          'location_ids': [inventory.location_ids],
          'product_ids': [inventory.product_ids],
          'accounting_date': inventory.accounting_date,
          'exhausted':inventory.exhausted,
          'prefill_counted_quantity': inventory.prefill_counted_quantity
        }
      },
      { headers: this.headers }).subscribe(data => {
        console.log(inventory.location_ids, inventory.product_ids)
        console.log(data);
      }, err => {
        console.log(err);
      });

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
