import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevisionFlujoFirmasPageRoutingModule } from './revision-flujo-firmas-routing.module';

import { RevisionFlujoFirmasPage } from './revision-flujo-firmas.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevisionFlujoFirmasPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [RevisionFlujoFirmasPage]
})
export class RevisionFlujoFirmasPageModule {}
