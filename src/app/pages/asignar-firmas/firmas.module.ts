import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirmasPageRoutingModule } from './firmas-routing.module';

import { FirmasPage } from './firmas.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirmasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FirmasPage]
})
export class FirmasPageModule {}
