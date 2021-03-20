import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Asignaciones } from '../../interfaces/interfaces-asignaciones';
import { Router } from '@angular/router';
import { RevisionService } from '../../services/revision.service';
import { RevisionModel } from '../../models/revision.model';

@Component({
  selector: 'app-revision-accesorios',
  templateUrl: './revision-accesorios.page.html',
  styleUrls: ['./revision-accesorios.page.scss'],
})
export class RevisionAccesoriosPage implements OnInit {

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
  enviarComentarioAccesorios(form: NgForm){

  }
  irARevisionHerramientas(){
    this.router.navigate(['/revision-herramientas']);
  }

}
