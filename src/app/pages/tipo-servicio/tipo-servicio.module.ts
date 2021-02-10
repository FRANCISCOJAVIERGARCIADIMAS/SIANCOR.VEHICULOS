import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoServicioPageRoutingModule } from './tipo-servicio-routing.module';

import { TipoServicioPage } from './tipo-servicio.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoServicioPageRoutingModule,ComponentsModule
  ],
  declarations: [TipoServicioPage]
})
export class TipoServicioPageModule {}
