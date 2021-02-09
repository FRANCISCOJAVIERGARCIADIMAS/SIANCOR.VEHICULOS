import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.page.html',
  styleUrls: ['./accesorios.page.scss'],
})
export class AccesoriosPage implements OnInit {

  accesorios = {
    espejoInterior:'',
    espejoLateralIzquierdo:'',
    espejoLateralDerecho:'',
    tapondeGasolina:'',
    tapondeAceite:'',
    tapondeRadiador:'',
    limpiadores:'',
    depositodeAgua:'',
    perillaPalancaVelocidad:'',
    viceras:'',
    manijasdeElevadores:'',
    tapasdePuertas:'',
    cenicero:'',
    guantera:'',
    tapetes:'',
    bayoneta:'',
    faros:'',
    cinturondeSeguridad:'',
    botondeSeguridadPuertas:'',
    tapondeLicuadora:'',
    depositodeLimpiadores:'',
    manijaPuertaDerecha:'',
    manijaPuertaIzquierda:'',
    cuartosDelanteros:'',
    cuartosTraseros:'',
    reversa:'',
    stop:'',
    lucesdeNavegacion:'',
    plafondeCajaInterior:'',
    toldo:'',
    parrilla:'',
    lucesdeCajayCabina:'',
    cielodeCabina:'',
    cortinas:'',
    vidriosPuertaDerecha:'',
    vidriosPuertaIzquierda:'',
    aletasDerecha:'',
    aletasIzquierda:'',
    rejadeTermo:'',
    claxon:''

  }

  constructor(private router:Router) { }

  ngOnInit() {
  }
  irAHerramientas(){
    this.router.navigate(['/herramientas']);
  }

}
