import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeeAllTaskPageRoutingModule } from './see-all-task-routing.module';

import { SeeAllTaskPage } from './see-all-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeeAllTaskPageRoutingModule
  ],
  declarations: [SeeAllTaskPage]
})
export class SeeAllTaskPageModule {}
