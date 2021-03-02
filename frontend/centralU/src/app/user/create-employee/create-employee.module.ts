import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateEmployeePageRoutingModule } from './create-employee-routing.module';

import { CreateEmployeePage } from './create-employee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateEmployeePageRoutingModule
  ],
  declarations: [CreateEmployeePage]
})
export class CreateEmployeePageModule {}
