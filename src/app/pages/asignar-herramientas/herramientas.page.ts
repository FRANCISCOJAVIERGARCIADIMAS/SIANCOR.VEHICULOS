import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AsignacionModel } from '../../models/asignacion.model';
import { DataAsignacionService } from '../../services/data-asignacion.service';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.page.html',
  styleUrls: ['./herramientas.page.scss'],
})
export class HerramientasPage implements OnInit {

asignacion = new AsignacionModel();

herramientas = {
  refracciondeLlanta:false,
  maneralDadoLlanta:false,
  desarmadorPlanoCruz:false,
  diablo:false,
  juegodecables:false,
  gatoHidraulico:false,
  reflejantes:false
}


  constructor( 
              private router:Router,
              private dataAsignacion: DataAsignacionService
              ) { }

  ngOnInit() {
  }

  irACarroceria(){
this.router.navigate(['/carroceria'])
  }

  enviarHerramientas( form: NgForm){
    this.asignacion.herramientas = form.value;
    console.log(this.asignacion.herramientas);
    this.dataAsignacion.sendAccesorios(this.asignacion.herramientas);
  }

}
