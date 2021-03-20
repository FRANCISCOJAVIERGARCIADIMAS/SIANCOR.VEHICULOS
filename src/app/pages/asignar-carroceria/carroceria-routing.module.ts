import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarroceriaPage } from './carroceria.page';

const routes: Routes = [
  {
    path: '',
    component: CarroceriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarroceriaPageRoutingModule {}
