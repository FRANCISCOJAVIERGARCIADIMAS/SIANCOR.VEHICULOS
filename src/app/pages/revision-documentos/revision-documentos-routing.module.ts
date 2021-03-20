import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevisionDocumentosPage } from './revision-documentos.page';

const routes: Routes = [
  {
    path: '',
    component: RevisionDocumentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevisionDocumentosPageRoutingModule {}
