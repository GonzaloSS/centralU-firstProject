import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeeAdjustmentPageRoutingModule } from './see-adjustment-routing.module';

import { SeeAdjustmentPage } from './see-adjustment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeeAdjustmentPageRoutingModule
  ],
  declarations: [SeeAdjustmentPage]
})
export class SeeAdjustmentPageModule {}
