import { Component, OnInit } from '@angular/core';
import { RevisionModel } from '../../models/revision.model';
import { Asignaciones } from '../../interfaces/interfaces-asignaciones';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RevisionService } from '../../services/revision.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-revision-flujo-firmas',
  templateUrl: './revision-flujo-firmas.page.html',
  styleUrls: ['./revision-flujo-firmas.page.scss'],
})
export class RevisionFlujoFirmasPage implements OnInit {

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
  enviarComentarioFirmas(form: NgForm){

  }


  irAFirmasRevision(){
    this.router.navigate(['/firmas-revision']);
  }

}
