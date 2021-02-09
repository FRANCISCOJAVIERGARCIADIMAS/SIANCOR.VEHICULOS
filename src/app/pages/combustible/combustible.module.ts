import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CombustiblePageRoutingModule } from './combustible-routing.module';

import { CombustiblePage } from './combustible.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CombustiblePageRoutingModule,
    ComponentsModule
  ],
  declarations: [CombustiblePage]
})
export class CombustiblePageModule {}
