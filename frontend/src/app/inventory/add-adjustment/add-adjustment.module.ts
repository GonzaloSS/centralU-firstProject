import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAdjustmentPageRoutingModule } from './add-adjustment-routing.module';

import { AddAdjustmentPage } from './add-adjustment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddAdjustmentPageRoutingModule
  ],
  declarations: [AddAdjustmentPage]
})
export class AddAdjustmentPageModule {}
