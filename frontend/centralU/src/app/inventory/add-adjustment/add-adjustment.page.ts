import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/product';
import { InventoryService } from 'src/app/services/inventory.service';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-add-adjustment',
  templateUrl: './add-adjustment.page.html',
  styleUrls: ['./add-adjustment.page.scss'],
})
export class AddAdjustmentPage implements OnInit {

  inventoryForm: FormGroup;
  products: Products[];

  constructor(  private productService: ProductsServiceService,
    private inventoryService: InventoryService,
    private router: Router,
    private fb: FormBuilder) {
      this.inventoryForm = this.fb.group({
        name: [''],
        location_ids: [''],
        product_ids: [''],
        accounting_date: [''],
        exhausted: [''],
        prefill_counted_quantity: ['']
      })
     }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    console.log("getAllProducts");
    
    this.productService.getProducts().subscribe(( product : any) => {
      console.log(product);
      this.products = product["result"];
      console.log(this.products)
      
    });
  }

  onFormSubmit() {
    if (!this.inventoryForm.valid) {
      return false;
    } else {
      let inventory = {
        id: null,
        name: this.inventoryForm.value.name,
        location_ids: parseInt(this.inventoryForm.value.location_ids),
        product_ids: parseInt(this.inventoryForm.value.product_ids),
        accounting_date: this.inventoryForm.value.accounting_date,
        exhausted: parseInt(this.inventoryForm.value.exhausted),
        prefill_counted_quantity: this.inventoryForm.value.prefill_counted_quantity,
        date:null,
        state:null,
        product_name: null,
        location_name: null
      }
      console.log(inventory)
      this.inventoryService.addAdjustment(inventory);
      this.router.navigateByUrl("home");
    }
  }
}
