import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Products } from '../../models/product';
import { ProductsServiceService } from '../../services/products-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  session: boolean;
  product: Products[];
  constructor(
    private productService: ProductsServiceService,
    private router: Router,
    private menu: MenuController
  ) { }

  ngOnInit() {
    if (localStorage.getItem("session_id")){
    this.session = true;
    this.getAllProducts();
  }else{
    this.router.navigateByUrl("home")
  }
  }

  toggleMenu() {
    this.menu.open();
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
