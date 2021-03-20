import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevisionConductorPage } from './revision-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: RevisionConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevisionConductorPageRoutingModule {}
