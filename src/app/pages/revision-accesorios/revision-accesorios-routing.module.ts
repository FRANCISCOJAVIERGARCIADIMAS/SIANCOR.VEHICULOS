import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevisionAccesoriosPage } from './revision-accesorios.page';

const routes: Routes = [
  {
    path: '',
    component: RevisionAccesoriosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevisionAccesoriosPageRoutingModule {}
