import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevisionVehiculoPageRoutingModule } from './revision-vehiculo-routing.module';

import { RevisionVehiculoPage } from './revision-vehiculo.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevisionVehiculoPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [RevisionVehiculoPage]
})
export class RevisionVehiculoPageModule {}
