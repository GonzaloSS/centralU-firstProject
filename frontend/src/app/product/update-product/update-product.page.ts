import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Products } from '../../models/product';
import { ProductsServiceService } from '../../services/products-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.page.html',
  styleUrls: ['./update-product.page.scss'],
})
export class UpdateProductPage implements OnInit {

  productUpdateForm: FormGroup;
  products: Products[];
  constructor(
    private productService: ProductsServiceService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.productUpdateForm = this.fb.group({
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

  ngOnInit() {
    this.getASingleProduct();
  }

  getASingleProduct() {
    let id = this.productService.getCurrentProductId();
    let name = this.productService.getCurrentName();
    let description = this.productService.getCurrentDescription();
    let type = this.productService.getCurrentType();
    let default_code = this.productService.getCurrentCode();
    let barcode = this.productService.getCurrentBarCode();
    let list_price = this.productService.getCurrentListPrice();
    let sale_ok = this.productService.getCurrentSale();
    let purchase_ok = this.productService.getCurrentPurchase();
    let invoice_policy = this.productService.getCurrentInvoice();
    let expense_policy = this.productService.getCurrentExpense();
    console.log(type)
    this.productUpdateForm = this.fb.group({
      name: name,
      description: description,
      type: type,
      default_code: default_code,
      barcode: barcode,
      list_price: list_price,
      sale_ok: sale_ok,
      purchase_ok: purchase_ok,
      invoice_policy: invoice_policy,
      expense_policy: expense_policy,

    })


  }

  onFormSubmit() {
    let id = this.productService.getCurrentProductId();
    if (!this.productUpdateForm.valid) {
      return false;
    } else {
      let products = {
        id: null,
        name: this.productUpdateForm.value.name,
        description: this.productUpdateForm.value.description,
        type: this.productUpdateForm.value.type,
        default_code: this.productUpdateForm.value.default_code,
        barcode: this.productUpdateForm.value.barcode,
        list_price: this.productUpdateForm.value.list_price,
        sale_ok: parseInt(this.productUpdateForm.value.sale_ok),
        purchase_ok: parseInt(this.productUpdateForm.value.purchase_ok),
        invoice_policy: this.productUpdateForm.value.invoice_policy,
        expense_policy: this.productUpdateForm.value.expense_policy,
        product_category: null,
        taxes_id: null,
        company: null,

      }
      console.log(products)
      this.productService.updateProduct(id, products)
      this.router.navigateByUrl("home")
    }
  }

}
