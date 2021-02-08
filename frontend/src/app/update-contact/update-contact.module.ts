import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateContactPageRoutingModule } from './update-contact-routing.module';

import { UpdateContactPage } from './update-contact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateContactPageRoutingModule
  ],
  declarations: [UpdateContactPage]
})
export class UpdateContactPageModule {}
