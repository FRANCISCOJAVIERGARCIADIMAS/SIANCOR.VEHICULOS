import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteDaniosPageRoutingModule } from './reporte-danios-routing.module';

import { ReporteDaniosPage } from './reporte-danios.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporteDaniosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ReporteDaniosPage]
})
export class ReporteDaniosPageModule {}
