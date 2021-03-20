import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReporteServiciosPage } from './reporte-servicios.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteServiciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteServiciosPageRoutingModule {}
