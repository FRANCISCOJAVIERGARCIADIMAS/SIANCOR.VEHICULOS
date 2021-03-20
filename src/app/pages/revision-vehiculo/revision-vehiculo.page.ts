import { Component, OnInit } from '@angular/core';
import { RevisionModel } from '../../models/revision.model';
import { Observable } from 'rxjs';
import { Asignaciones } from '../../interfaces/interfaces-asignaciones';
import { Router } from '@angular/router';
import { RevisionService } from '../../services/revision.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-revision-vehiculo',
  templateUrl: './revision-vehiculo.page.html',
  styleUrls: ['./revision-vehiculo.page.scss'],
})
export class RevisionVehiculoPage implements OnInit {
  revision = new RevisionModel();
  asignaciones: Observable<Asignaciones[]>;

  // variables para manipular el folio
  folioAsignacion: string = 'x' ;
  folioAsignacionA:any;
  constructor(
              private router:Router,
              private revisionService: RevisionService 
              ) { }
            
  ngOnInit() {
              this.asignaciones = this.revisionService.getAsignaciones();
              this.obtenerFolioAsignacion();
              }

 obtenerFolioAsignacion(){
    this.revisionService.$getFolioAsignacion.subscribe( data => {
      this.folioAsignacionA = data;
      this.folioAsignacion = this.folioAsignacionA;
    }).unsubscribe();
  }

  enviarComentarioVehiculo(form: NgForm){

  }
  irARevisionDocumentos(){
    this.router.navigate(['/revision-documentos']);
  }

}
