import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarroceriaPageRoutingModule } from './carroceria-routing.module';

import { CarroceriaPage } from './carroceria.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarroceriaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CarroceriaPage]
})
export class CarroceriaPageModule {}
