import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddIncidenciaPageRoutingModule } from './add-incidencia-routing.module';

import { AddIncidenciaPage } from './add-incidencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddIncidenciaPageRoutingModule
  ],
  declarations: [AddIncidenciaPage]
})
export class AddIncidenciaPageModule {}
