import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


import { HeaderComponent } from './header/header.component';
import { AgregarComentarioComponent } from './agregar-comentario/agregar-comentario.component';
import { CardCameraComponent } from './card-camera/card-camera.component';
import { SignaturePadComponent } from './signature-pad/signature-pad.component';
import  {  SignaturePadModule  }  from  'angular2-signaturepad' ;
// import { SignaturePad } from 'angular2-signaturepad/angular2-signaturepad';

@NgModule({
  declarations: [
    HeaderComponent,
    AgregarComentarioComponent,
    CardCameraComponent,
    // SignaturePadModule,
    SignaturePadComponent
  ],
  exports:[
    HeaderComponent,
    AgregarComentarioComponent,
    CardCameraComponent,
    SignaturePadComponent,
    // SignaturePad
  ],
  imports: [
    CommonModule,
    IonicModule,
    SignaturePadModule
    // SignaturePadModule,
    // SignaturePadComponent
  ]
})
export class ComponentsModule { }
