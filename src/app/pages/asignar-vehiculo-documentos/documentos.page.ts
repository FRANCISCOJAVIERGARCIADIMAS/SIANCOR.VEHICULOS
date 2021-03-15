import { Component, OnInit, Output, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AgregarComentarioComponent } from '../../components/agregar-comentario/agregar-comentario.component';
import { Router } from '@angular/router';
import { DataAsignacionService } from '../../services/data-asignacion.service';
import { UnidadesTransporteService } from 'src/app/services/unidades-transporte.service';
import { Unidad } from 'src/app/interfaces/interfaces-unidades';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { AsignacionModel } from 'src/app/models/asignacion.model';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.page.html',
  styleUrls: ['./documentos.page.scss'],
})
export class DocumentosPage implements OnInit {

  asignacion = new AsignacionModel();
  unidades: Observable<Unidad[]>;

  // variables para manipular el noEconomico
  noEconomico: string = 'x' ;
  noEconomicoA:any;

  constructor( 
      private router:Router,
      private unidadesServices: UnidadesTransporteService,
      private dataAsignacion: DataAsignacionService
      ) { }

  irACombustible(){
    this.router.navigate(['/combustible'])
  }

  ngOnInit() {
    // obtenemos toda la data de las unidades
    this.unidades = this.unidadesServices.getUnidades();
    // obtenemos el id de la unidad seleccionada para filtrar en la vista
    this.obtenernoEconomico();
  }

  obtenernoEconomico(){
    this.dataAsignacion.$getnoEconomico.subscribe( data => {
      this.noEconomicoA = data;
      this.noEconomico = this.noEconomicoA; 
    }).unsubscribe();
  }

  enviarDocumentos( form: NgForm){
    this.asignacion.documentos = form.value;
    console.log(this.asignacion.documentos);
    this.dataAsignacion.sendDocumentos(this.asignacion.documentos)
    this.irACombustible();
  }

 


}
