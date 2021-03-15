import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AsignacionModel } from '../../models/asignacion.model';
import { DataAsignacionService } from '../../services/data-asignacion.service';

@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.page.html',
  styleUrls: ['./accesorios.page.scss'],
})
export class AccesoriosPage implements OnInit {


  asignacion = new AsignacionModel();
  accesorios = {
    espejoInterior:false,
    espejoLateralIzquierdo:false,
    espejoLateralDerecho:false,
    tapondeGasolina:false,
    tapondeAceite:false,
    tapondeRadiador:false,
    limpiadores:false,
    depositodeAgua:false,
    perillaPalancaVelocidad:false,
    viceras:false,
    manijasdeElevadores:false,
    tapasdePuertas:false,
    cenicero:false,
    guantera:false,
    tapetes:false,
    bayoneta:false,
    faros:false,
    cinturondeSeguridad:false,
    botondeSeguridadPuertas:false,
    tapondeLicuadora:false,
    depositodeLimpiadores:false,
    manijaPuertaDerecha:false,
    manijaPuertaIzquierda:false,
    cuartosDelanteros:false,
    cuartosTraseros:false,
    reversa:false,
    stop:false,
    lucesdeNavegacion:false,
    plafondeCajaInterior:false,
    toldo:false,
    parrilla:false,
    lucesdeCajayCabina:false,
    cielodeCabina:false,
    cortinas:false,
    vidriosPuertaDerecha:false,
    vidriosPuertaIzquierda:false,
    aletasDerecha:false,
    aletasIzquierda:false,
    rejadeTermo:false,
    claxon:false

  }

  constructor(
              private router:Router,
              private dataAsignacion: DataAsignacionService
              ) { }

  ngOnInit() {
  }
  
  irAHerramientas(){
    this.router.navigate(['/herramientas']);
  }


  enviarAccesorios(form: NgForm){
    this.asignacion.accesorios = form.value;
    console.log(this.asignacion.accesorios);
    this.dataAsignacion.sendAccesorios(this.asignacion.accesorios);
  }

}
