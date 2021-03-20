import { Component, OnInit } from '@angular/core';
import { RevisionModel } from '../../models/revision.model';
import { Asignaciones } from '../../interfaces/interfaces-asignaciones';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RevisionService } from '../../services/revision.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-revision-documentos',
  templateUrl: './revision-documentos.page.html',
  styleUrls: ['./revision-documentos.page.scss'],
})
export class RevisionDocumentosPage implements OnInit {

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
  enviarComentarioDocumentos(form: NgForm){

  }
  irARevisionAccesorios(){
    this.router.navigate(['/revision-accesorios']);
  }


}
