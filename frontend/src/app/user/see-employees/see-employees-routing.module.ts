import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeeEmployeesPage } from './see-employees.page';

const routes: Routes = [
  {
    path: '',
    component: SeeEmployeesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeeEmployeesPageRoutingModule {}
