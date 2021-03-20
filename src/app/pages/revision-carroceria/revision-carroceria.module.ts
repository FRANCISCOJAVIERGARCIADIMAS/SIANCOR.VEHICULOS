import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevisionCarroceriaPageRoutingModule } from './revision-carroceria-routing.module';

import { RevisionCarroceriaPage } from './revision-carroceria.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevisionCarroceriaPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [RevisionCarroceriaPage]
})
export class RevisionCarroceriaPageModule {}
