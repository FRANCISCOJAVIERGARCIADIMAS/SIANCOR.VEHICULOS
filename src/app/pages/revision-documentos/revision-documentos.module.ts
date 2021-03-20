import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevisionDocumentosPageRoutingModule } from './revision-documentos-routing.module';

import { RevisionDocumentosPage } from './revision-documentos.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevisionDocumentosPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [RevisionDocumentosPage]
})
export class RevisionDocumentosPageModule {}
