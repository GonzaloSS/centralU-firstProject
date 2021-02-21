import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeeMyOwnTaskPage } from './see-my-own-task.page';

const routes: Routes = [
  {
    path: '',
    component: SeeMyOwnTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeeMyOwnTaskPageRoutingModule {}
