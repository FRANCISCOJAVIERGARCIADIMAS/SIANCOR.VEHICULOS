import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RevisionService } from '../../services/revision.service';
import { Asignaciones } from '../../interfaces/interfaces-asignaciones';
import { RevisionModel } from '../../models/revision.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-revision',
  templateUrl: './revision.page.html',
  styleUrls: ['./revision.page.scss'],
})
export class RevisionPage implements OnInit {

  asignaciones: Observable<Asignaciones[]>;

  revision = new RevisionModel();

  constructor(
              private router:Router,
              private revisionService:RevisionService
              ) {
   }

  ngOnInit() {
    this.asignaciones = this.revisionService.getAsignaciones();
    
  }

  enviarFolioAsignacion(){
    this.revisionService.sendFolioAsignacion(this.revision.folioAsignacion);
    console.log(this.revision.folioAsignacion);
  }
  enviarFolioA(form: NgForm){
  }

  
  irARevisionConductor(){
    this.router.navigate(['/revision-conductor']);
    this.enviarFolioAsignacion();
  }

}
