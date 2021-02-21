import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateEmployeePage } from './update-employee.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateEmployeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateEmployeePageRoutingModule {}
