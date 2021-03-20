import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevisionNivelCombustiblePageRoutingModule } from './revision-nivel-combustible-routing.module';

import { RevisionNivelCombustiblePage } from './revision-nivel-combustible.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevisionNivelCombustiblePageRoutingModule
  ],
  declarations: [RevisionNivelCombustiblePage]
})
export class RevisionNivelCombustiblePageModule {}
