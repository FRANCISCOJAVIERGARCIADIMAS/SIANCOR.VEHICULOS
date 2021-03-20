import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RevisionModel } from 'src/app/models/revision.model';
import { RevisionService } from '../../services/revision.service';
import { Observable } from 'rxjs';
import { Asignaciones } from '../../interfaces/interfaces-asignaciones';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-revision-conductor',
  templateUrl: './revision-conductor.page.html',
  styleUrls: ['./revision-conductor.page.scss'],
})
export class RevisionConductorPage implements OnInit {
  
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
  enviarComentarioConductor(form: NgForm){

  }
  irARevisionVehiculo(){
    this.router.navigate(['/revision-vehiculo']);
  }

}
