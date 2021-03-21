import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteServiciosPageRoutingModule } from './reporte-servicios-routing.module';

import { ReporteServiciosPage } from './reporte-servicios.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporteServiciosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ReporteServiciosPage]
})
export class ReporteServiciosPageModule {}
