import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevisionCarroceriaPage } from './revision-carroceria.page';

const routes: Routes = [
  {
    path: '',
    component: RevisionCarroceriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevisionCarroceriaPageRoutingModule {}
