import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeeAdjustmentPageRoutingModule } from './see-adjustment-routing.module';

import { SeeAdjustmentPage } from './see-adjustment.page';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    SeeAdjustmentPageRoutingModule
  ],
  declarations: [SeeAdjustmentPage]
})
export class SeeAdjustmentPageModule {}
