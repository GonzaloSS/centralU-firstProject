import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../../models/product';
import { ProductsServiceService } from '../../services/products-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  product: Products[];
  constructor(
    private productService: ProductsServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log("hola llega aki");
    this.getASingleProduct();
  }


  getASingleProduct(){
    console.log("getAllContact en serio?");
    let id = this.productService.getCurrentProductId();
    console.log(id+ " hola");
    this.productService.getProductById(id).subscribe(( product : any) => {
      console.log(product);
      this.product = product["result"];
      console.log(this.product)
      
    });
  }

  editProduct(id: number, name: string, description: string, product_type: string,
    default_code: number, barcode: number, list_price: number, sale_ok: number,
    purchase_ok: number, invoice_policy: string, expense_policy: string){

    this.productService.setCurrentProduct(id, name, description, product_type,
      default_code, barcode, list_price, sale_ok,
      purchase_ok, invoice_policy, expense_policy);
    console.log(id);
    this.router.navigateByUrl("update-product")
  }

  deleteProduct(id:number){
    console.log(id)
    this.productService.deleteProduct(id)
  }
}
