import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateEmployeePageRoutingModule } from './update-employee-routing.module';

import { UpdateEmployeePage } from './update-employee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateEmployeePageRoutingModule
  ],
  declarations: [UpdateEmployeePage]
})
export class UpdateEmployeePageModule {}
