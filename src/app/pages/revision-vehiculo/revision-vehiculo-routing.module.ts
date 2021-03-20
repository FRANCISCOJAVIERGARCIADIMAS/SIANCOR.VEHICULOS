import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevisionVehiculoPage } from './revision-vehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: RevisionVehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevisionVehiculoPageRoutingModule {}
