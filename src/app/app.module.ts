import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { Camera } from '@ionic-native/camera/ngx';
// import { SignaturePad, SignaturePadModule } from 'angular2-signaturepad/angular2-signaturepad';
// import { SignaturePadComponent } from './components/signature-pad/signature-pad.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Camera],
  bootstrap: [AppComponent],
})
export class AppModule {}
