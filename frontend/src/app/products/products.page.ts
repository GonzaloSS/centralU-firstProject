import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../models/product';
import { ProductsServiceService } from '../services/products-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  product: Products[];
  constructor(
    private productService: ProductsServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllProducts();
  }

  goToDetails(id: number){
    this.productService.setCurrentProductId(id);
    this.router.navigateByUrl("product-details");
  }


  getAllProducts(){
    console.log("getAllProducts");
    
    this.productService.getProducts().subscribe(( product : any) => {
      console.log(product);
      this.product = product["result"];
      console.log(this.product)
      
    });
  }

}
