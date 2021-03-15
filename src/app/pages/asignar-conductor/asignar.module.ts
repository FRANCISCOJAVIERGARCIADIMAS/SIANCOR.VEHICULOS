import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignarPageRoutingModule } from './asignar-routing.module';

import { AsignarPage } from './asignar.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ConductoresService } from '../../services/conductores.service';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignarPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [AsignarPage]
})
export class AsignarPageModule {


}
