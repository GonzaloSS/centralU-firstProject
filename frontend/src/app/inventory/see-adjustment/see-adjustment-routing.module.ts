import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeeAdjustmentPage } from './see-adjustment.page';

const routes: Routes = [
  {
    path: '',
    component: SeeAdjustmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeeAdjustmentPageRoutingModule {}
