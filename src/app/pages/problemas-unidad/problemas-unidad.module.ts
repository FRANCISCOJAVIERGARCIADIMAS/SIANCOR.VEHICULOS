import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProblemasUnidadPageRoutingModule } from './problemas-unidad-routing.module';

import { ProblemasUnidadPage } from './problemas-unidad.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProblemasUnidadPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProblemasUnidadPage]
})
export class ProblemasUnidadPageModule {}
