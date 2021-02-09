import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccesoriosPageRoutingModule } from './accesorios-routing.module';

import { AccesoriosPage } from './accesorios.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccesoriosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AccesoriosPage]
})
export class AccesoriosPageModule {}
