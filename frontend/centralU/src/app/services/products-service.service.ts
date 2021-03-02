import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Products } from '../models/product';

var headers = new HttpHeaders({


  'Content-Type':'application/json',

  'Accept' : 'application/json'

});

let postData = {
  jsonrpc: "2.0",
  params: {}
}


@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  currentName: string;
  currentDescription: string;
  currentType: string;
  currentCode: number;
  currentBarCode: number;
  currentListPrice: number;
  currentCost: number;
  currentSale: number;
  currentPurchase: number;
  currentInvoice: string;
  currentExpense: string;
  currentId: number;

  headers: HttpHeaders
  currentProductId: number
  constructor(
    private httpClient: HttpClient
   
  ) { }



  getProducts(): Observable<Products[]> {

    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Openerp-Session-Id": localStorage.getItem('session_id')
  })
    return this.httpClient.post<Products[]>("http://localhost:8069/api/getProducts", postData, { headers: this.headers })
      .pipe(

        tap(products => console.log('fetched iproducts')),
        catchError(this.handleError('getProducts', []))
      );
  }


  setCurrentProduct(id: number, name: string, description: string, type: string,
    default_code: number, barcode: number, list_price: number, sale_ok: number,
    purchase_ok: number, invoice_policy: string, expense_policy: string) {
    this.currentProductId = id;
    this.currentName = name;
    this.currentDescription = description;
    this.currentType = type;
    this.currentCode = default_code;
    this.currentBarCode = barcode;
    this.currentListPrice = list_price;
    this.currentSale = sale_ok;
    this.currentPurchase = purchase_ok;
    this.currentInvoice = invoice_policy;
    this.currentExpense = expense_policy;
    console.log(this.currentSale, this.currentPurchase)
  }




  setCurrentProductId(id: number) {
    console.log(id + "hola")
    this.currentId = id;
  }

  getCurrentProductId(): number {
    console.log( this.currentId +" vamos ");
    return this.currentId;
    
  }

  getProductById(id: number) {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Openerp-Session-Id": localStorage.getItem('session_id')
  })
    return this.httpClient.post("http://localhost:8069/api/getASingleProduct",
      { jsonrpc: "2.0", params: { 'id': id } },
      { headers: this.headers }).pipe(
        tap(data => {
          console.log("hola")
          console.log(data);
        }, err => {
          console.log(err);
        }));
  }




  getCurrentName(): string {
    return this.currentName;
  }
  getCurrentDescription(): string {
    return this.currentDescription;
  }
  getCurrentType(): string {
    return this.currentType;
  }
  getCurrentCode(): number {
    return this.currentCode;
  }
  getCurrentBarCode(): number {
    return this.currentBarCode;
  }
  getCurrentListPrice(): number {
    return this.currentListPrice;
  }
  getCurrentSale(): number {
    return this.currentSale;
  }
  getCurrentPurchase(): number {
    return this.currentPurchase;
  }
  getCurrentInvoice(): string {
    return this.currentInvoice;
  }
  getCurrentExpense(): string {
    return this.currentExpense;
  }



  updateProduct(id: number, products: Products) {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Openerp-Session-Id": localStorage.getItem('session_id')
  })
    this.httpClient.post("http://localhost:8069/api/updateProduct",
      {
        jsonrpc: "2.0", params: {
          'id': id, 'name': products.name, 'description': products.description,
          'type': products.type, 'default_code': products.default_code,
          'barcode': products.barcode, 'list_price': products.list_price,
          'sale_ok': products.sale_ok, 'purchase_ok': products.purchase_ok, 'invoice_policy': products.invoice_policy,
          'expense_policy': products.expense_policy
        }
      },
      { headers: this.headers }).subscribe(data => {
        console.log(data);
      }, err => {
        console.log(err);
      });

  }

  addProduct(products: Products) {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Openerp-Session-Id": localStorage.getItem('session_id')
  })
    this.httpClient.post("http://localhost:8069/api/createProduct",
      {
        jsonrpc: "2.0", params: {
          'name': products.name, 'description': products.description,
          'type': products.type, 'default_code': products.default_code,
          'barcode': products.barcode, 'list_price': products.list_price,
          'sale_ok': products.sale_ok, 'purchase_ok': products.purchase_ok, 'invoice_policy': products.invoice_policy,
          'expense_policy': products.expense_policy
        }
      },
      { headers: this.headers }).subscribe(data => {
        console.log(data);
      }, err => {
        console.log(err);
      });

  }

  deleteProduct(id: number){
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Openerp-Session-Id": localStorage.getItem('session_id')
  })
    this.httpClient.post("http://localhost:8069/api/deleteProduct",
    {jsonrpc: "2.0", params : { "id": id} },
    {headers: this.headers}).subscribe(data => {
      console.log(data);
    }, err =>{
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
