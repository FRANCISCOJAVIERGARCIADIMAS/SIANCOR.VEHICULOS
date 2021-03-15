import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirmasRevisionPage } from './firmas-revision.page';

const routes: Routes = [
  {
    path: '',
    component: FirmasRevisionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirmasRevisionPageRoutingModule {}
