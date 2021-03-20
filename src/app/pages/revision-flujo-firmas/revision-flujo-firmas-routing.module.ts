import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevisionFlujoFirmasPage } from './revision-flujo-firmas.page';

const routes: Routes = [
  {
    path: '',
    component: RevisionFlujoFirmasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevisionFlujoFirmasPageRoutingModule {}
