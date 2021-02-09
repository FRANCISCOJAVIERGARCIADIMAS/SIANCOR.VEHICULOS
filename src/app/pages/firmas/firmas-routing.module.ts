import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirmasPage } from './firmas.page';

const routes: Routes = [
  {
    path: '',
    component: FirmasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirmasPageRoutingModule {}
