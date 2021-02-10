import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-problemas-unidad',
  templateUrl: './problemas-unidad.page.html',
  styleUrls: ['./problemas-unidad.page.scss'],
})
export class ProblemasUnidadPage implements OnInit {

  problemasUnidad = {
    llantas:'',
    fugas:'',
    direcion:'',
    sonidoFrenos:'',
    tardaTiempoFrenar:'',
    clutch:'',
    perdidaPotencia:'',
    sonidoSuspension:'',
    cambioVelocidades:'',
    noEnciende:'',
    sinBateria:'',
    humo:'',
    cristal:'',
    puertasCaidas:'',
    noAbrePuerta:'',
    seVaDeLado:'',
    asientosTableroChapas:'',
    espejos:'',
    luces:'',
    otro:''
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  irATipoServicio(){
this.router.navigate(['/tipo-servicio'])
  }

}
