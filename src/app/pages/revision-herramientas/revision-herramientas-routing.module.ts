import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevisionHerramientasPage } from './revision-herramientas.page';

const routes: Routes = [
  {
    path: '',
    component: RevisionHerramientasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevisionHerramientasPageRoutingModule {}
