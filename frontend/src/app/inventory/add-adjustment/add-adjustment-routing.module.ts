import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAdjustmentPage } from './add-adjustment.page';

const routes: Routes = [
  {
    path: '',
    component: AddAdjustmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAdjustmentPageRoutingModule {}
