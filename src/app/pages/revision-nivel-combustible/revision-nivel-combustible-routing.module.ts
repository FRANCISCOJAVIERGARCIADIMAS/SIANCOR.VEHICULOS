import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevisionNivelCombustiblePage } from './revision-nivel-combustible.page';

const routes: Routes = [
  {
    path: '',
    component: RevisionNivelCombustiblePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevisionNivelCombustiblePageRoutingModule {}
