import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Products } from '../models/product';
import { ProductsServiceService } from '../services/products-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {

  productForm: FormGroup;
  products: Products[];
  constructor(
    private productService: ProductsServiceService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      type: [''],
      default_code: [''],
      barcode: [''],
      list_price: [''],
      sale_ok: [''],
      purchase_ok: [''],
      invoice_policy: [''],
      expense_policy: [''],
    })
  }

  ngOnInit(){

  }

  onFormSubmit() {
    if (!this.productForm.valid) {
      return false;
    } else {
      let products = {
        id: null,
        name: this.productForm.value.name,
        description: this.productForm.value.description,
        type: this.productForm.value.type,
        default_code: this.productForm.value.default_code,
        barcode: this.productForm.value.barcode,
        list_price: this.productForm.value.list_price,
        sale_ok: parseInt(this.productForm.value.sale_ok),
        purchase_ok: parseInt(this.productForm.value.purchase_ok),
        invoice_policy: this.productForm.value.invoice_policy,
        expense_policy: this.productForm.value.expense_policy,
        product_category: null,
        taxes_id: null,
        company: null,

      }
      console.log(products)
      this.productService.addProduct(products)
      this.router.navigateByUrl("home")
    }
  }

}
