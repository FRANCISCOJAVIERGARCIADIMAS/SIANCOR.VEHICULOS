import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevisionAccesoriosPageRoutingModule } from './revision-accesorios-routing.module';

import { RevisionAccesoriosPage } from './revision-accesorios.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevisionAccesoriosPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [RevisionAccesoriosPage]
})
export class RevisionAccesoriosPageModule {}
