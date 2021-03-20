import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevisionConductorPageRoutingModule } from './revision-conductor-routing.module';

import { RevisionConductorPage } from './revision-conductor.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevisionConductorPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [RevisionConductorPage]
})
export class RevisionConductorPageModule {}
