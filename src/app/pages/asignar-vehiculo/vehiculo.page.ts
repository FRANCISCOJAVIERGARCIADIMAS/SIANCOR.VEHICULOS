import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnidadesTransporteService } from '../../services/unidades-transporte.service';
import { Unidad } from '../../interfaces/interfaces-unidades';
import { Observable } from 'rxjs';
import { DataAsignacionService } from '../../services/data-asignacion.service';
import { NgForm } from '@angular/forms';
import { AsignacionModel } from '../../models/asignacion.model';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.page.html',
  styleUrls: ['./vehiculo.page.scss'],
})
export class VehiculoPage implements OnInit {

  unidades: Observable<Unidad[]>;

 asignacion = new AsignacionModel();

  constructor(
    private router:Router,
    private unidadesServices: UnidadesTransporteService,
    private unidadesDocumentos: DataAsignacionService
   ) { }

  
  ngOnInit() {
    this.unidades = this.unidadesServices.getUnidades();
  }

  enviarnoEco(){
    this.unidadesDocumentos.sendnoEconomico(this.asignacion.noEconomico)
  }
  
  mostrarDocumentos(){
    this.router.navigate(['/documentos'])
    this.enviarnoEco();
  }

  enviarNoEconomico( form: NgForm){
      this.asignacion.noEconomico = form.value;
      console.log( this.asignacion.noEconomico);
  }



}
