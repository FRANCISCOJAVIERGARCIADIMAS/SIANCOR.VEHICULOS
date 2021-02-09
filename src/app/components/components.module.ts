import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


import { HeaderComponent } from './header/header.component';
import { AgregarComentarioComponent } from './agregar-comentario/agregar-comentario.component';
 import { CardCameraComponent } from './card-camera/card-camera.component';
// import { SignaturePadComponent } from './signature-pad/signature-pad.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AgregarComentarioComponent,
     CardCameraComponent,
    // SignaturePadComponent
  ],
  exports:[
    HeaderComponent,
    AgregarComentarioComponent,
     CardCameraComponent,
    // SignaturePadComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
