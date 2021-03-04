import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeeEmployeeTaskPageRoutingModule } from './see-employee-task-routing.module';

import { SeeEmployeeTaskPage } from './see-employee-task.page';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    SeeEmployeeTaskPageRoutingModule
  ],
  declarations: [SeeEmployeeTaskPage]
})
export class SeeEmployeeTaskPageModule {}
