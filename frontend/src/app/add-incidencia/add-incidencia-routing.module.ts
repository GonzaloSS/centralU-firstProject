import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddIncidenciaPage } from './add-incidencia.page';

const routes: Routes = [
  {
    path: '',
    component: AddIncidenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddIncidenciaPageRoutingModule {}
