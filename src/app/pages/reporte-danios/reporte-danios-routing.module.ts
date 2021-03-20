import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReporteDaniosPage } from './reporte-danios.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteDaniosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteDaniosPageRoutingModule {}
