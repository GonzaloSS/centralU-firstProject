import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateProductPageRoutingModule } from './update-product-routing.module';

import { UpdateProductPage } from './update-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateProductPageRoutingModule
  ],
  declarations: [UpdateProductPage]
})
export class UpdateProductPageModule {}
