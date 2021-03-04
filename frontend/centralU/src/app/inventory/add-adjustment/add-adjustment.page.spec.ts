import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { AddAdjustmentPage } from './add-adjustment.page';

describe('AddAdjustmentPage', () => {
  let component: AddAdjustmentPage;
  let fixture: ComponentFixture<AddAdjustmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAdjustmentPage ],
      imports: [IonicModule.forRoot(), HttpClientModule, RouterTestingModule, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AddAdjustmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create adjustment', ()=>{
    let  inventory = {
        id: null,
        name: "inventory test",
        location_ids: 1,
        product_ids: 1,
        accounting_date: "1111-01-01",
        exhausted: 1,
        prefill_counted_quantity: "inventory test",
        date:null,
        state:null,
        product_name: null,
        location_name: null
      };
  
      component.inventoryForm.controls['name'].setValue(inventory.name);
      component.inventoryForm.controls['location_ids'].setValue(inventory.location_ids);
      component.inventoryForm.controls['product_ids'].setValue(inventory.product_ids);
      component.inventoryForm.controls['accounting_date'].setValue(inventory.accounting_date);
      component.inventoryForm.controls['exhausted'].setValue(inventory.exhausted);
      component.inventoryForm.controls['prefill_counted_quantity'].setValue(inventory.prefill_counted_quantity);

      component.onFormSubmit();
  
  
      expect(component.onFormSubmit()).toEqual(inventory);
    });

    it('should not create adjustment', ()=>{
      let  inventory = {
          id: null,
          name: "inventory test",
          location_ids: 1,
          product_ids: 1,
          accounting_date: "1111-01-01",
          exhausted: 1,
          prefill_counted_quantity: "inventory test",
          date:null,
          state:null,
          product_name: null,
          location_name: null
        };
    
        component.inventoryForm.controls['name'].setValue(inventory.name);
        component.inventoryForm.controls['location_ids'].setValue(inventory.location_ids);
        component.inventoryForm.controls['product_ids'].setValue(inventory.product_ids);
        component.inventoryForm.controls['accounting_date'].setValue(inventory.accounting_date);
        component.inventoryForm.controls['exhausted'].setValue(inventory.exhausted);
        component.inventoryForm.controls['prefill_counted_quantity'].setValue(inventory.prefill_counted_quantity);
  
        component.onFormSubmit();
    
    
        expect(component.onFormSubmit()).not.toEqual(inventory);
      });
});
