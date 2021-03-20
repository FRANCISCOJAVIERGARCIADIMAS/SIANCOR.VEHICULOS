import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteDatosGeneralesPageRoutingModule } from './reporte-datos-generales-routing.module';

import { ReporteDatosGeneralesPage } from './reporte-datos-generales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporteDatosGeneralesPageRoutingModule
  ],
  declarations: [ReporteDatosGeneralesPage]
})
export class ReporteDatosGeneralesPageModule {}
