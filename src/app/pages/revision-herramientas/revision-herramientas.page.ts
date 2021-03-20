import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Asignaciones } from '../../interfaces/interfaces-asignaciones';
import { Router } from '@angular/router';
import { RevisionService } from '../../services/revision.service';
import { RevisionModel } from '../../models/revision.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-revision-herramientas',
  templateUrl: './revision-herramientas.page.html',
  styleUrls: ['./revision-herramientas.page.scss'],
})
export class RevisionHerramientasPage implements OnInit {

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
  enviarComentarioHerramientas(form: NgForm){

  }
  irARevisionCarroceria(){
    this.router.navigate(['/revision-carroceria']);
  }

}
