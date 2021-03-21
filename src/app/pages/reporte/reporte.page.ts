import { Component, OnInit } from '@angular/core';
import { ReporteModel } from '../../models/reportes';
import { Observable } from 'rxjs';
import { Asignaciones } from '../../interfaces/interfaces-asignaciones';
import { Router } from '@angular/router';
import { RevisionService } from '../../services/revision.service';
import { DataAsignacionService } from '../../services/data-asignacion.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.page.html',
  styleUrls: ['./reporte.page.scss'],
})
export class ReportePage implements OnInit {

  asignaciones: Observable<Asignaciones[]>

  reporte = new ReporteModel();
  
  itemSeleccionado: string="x";
  
  constructor(
              private router:Router,
              private asignacionServices: DataAsignacionService
              ) {}

  ngOnInit() {
    this.asignaciones = this.asignacionServices.getAsignaciones();
  }

  enviarFolioAsignacion(){

  }

  enviarFolioA(form: NgForm){


  }

  irAReporteDatosGenerales(){
    this.router.navigate(['/reporte-datos-generales'])
    this.enviarFolioAsignacion();
  }

}
