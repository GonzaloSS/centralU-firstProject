import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeeEmployeesPageRoutingModule } from './see-employees-routing.module';

import { SeeEmployeesPage } from './see-employees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeeEmployeesPageRoutingModule
  ],
  declarations: [SeeEmployeesPage]
})
export class SeeEmployeesPageModule {}
