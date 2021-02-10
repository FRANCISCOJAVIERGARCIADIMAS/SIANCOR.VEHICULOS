import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirmasRevisionPageRoutingModule } from './firmas-revision-routing.module';

import { FirmasRevisionPage } from './firmas-revision.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirmasRevisionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FirmasRevisionPage]
})
export class FirmasRevisionPageModule {}
