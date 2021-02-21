import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeeAllTaskPage } from './see-all-task.page';

const routes: Routes = [
  {
    path: '',
    component: SeeAllTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeeAllTaskPageRoutingModule {}
