import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { AddProductPage } from './add-product.page';

describe('AddProductPage', () => {
  let component: AddProductPage;
  let fixture: ComponentFixture<AddProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductPage ],
      imports: [IonicModule.forRoot(), HttpClientModule, RouterTestingModule, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AddProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create product', ()=>{
    let  product = {
      id: null,
      name: "product test",
      description: "product test",
      type: "test",
      default_code: "product test",
      barcode: "product test",
      list_price: "product test",
      sale_ok: 1,
      purchase_ok: 1,
      invoice_policy: "product test",
      expense_policy: "product test",
      product_category: null,
      taxes_id: null,
      company: null,
      };
  
      component.productForm.controls['name'].setValue(product.name);
      component.productForm.controls['description'].setValue(product.description);
      component.productForm.controls['type'].setValue(product.type);
      component.productForm.controls['default_code'].setValue(product.default_code);
      component.productForm.controls['barcode'].setValue(product.barcode);
      component.productForm.controls['list_price'].setValue(product.list_price);
      component.productForm.controls['sale_ok'].setValue(product.sale_ok);
      component.productForm.controls['purchase_ok'].setValue(product.purchase_ok);
      component.productForm.controls['invoice_policy'].setValue(product.invoice_policy);
      component.productForm.controls['expense_policy'].setValue(product.expense_policy);
      component.onFormSubmit();
  
  
      expect(component.onFormSubmit()).toEqual(product);
    });
});
