import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeeEmployeeTaskPage } from './see-employee-task.page';

const routes: Routes = [
  {
    path: '',
    component: SeeEmployeeTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeeEmployeeTaskPageRoutingModule {}
