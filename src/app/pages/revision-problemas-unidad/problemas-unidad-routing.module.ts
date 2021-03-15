import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProblemasUnidadPage } from './problemas-unidad.page';

const routes: Routes = [
  {
    path: '',
    component: ProblemasUnidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProblemasUnidadPageRoutingModule {}
