import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevisionPageRoutingModule } from './revision-routing.module';

import { RevisionPage } from './revision.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevisionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RevisionPage]
})
export class RevisionPageModule {}
