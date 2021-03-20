import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteServiciosPageRoutingModule } from './reporte-servicios-routing.module';

import { ReporteServiciosPage } from './reporte-servicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporteServiciosPageRoutingModule
  ],
  declarations: [ReporteServiciosPage]
})
export class ReporteServiciosPageModule {}
