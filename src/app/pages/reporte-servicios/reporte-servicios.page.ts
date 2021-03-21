import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';
import { Servicios } from '../../interfaces/interfaces-servicios';
import { Observable } from 'rxjs';
import { ReporteModel } from '../../models/reportes';
import { NgForm } from '@angular/forms';
import { Reportes } from '../../interfaces/interfaces-reportes';
import { RevisionService } from '../../services/revision.service';

@Component({
  selector: 'app-reporte-servicios',
  templateUrl: './reporte-servicios.page.html',
  styleUrls: ['./reporte-servicios.page.scss'],
})
export class ReporteServiciosPage implements OnInit {

  servicios: Observable<Servicios[]>;
  
  reportes: Observable<Reportes[]>;

  reporte = new ReporteModel();

  constructor( 
              private serviciosServices: ServiciosService,
              private revisionService: RevisionService
              ) { }

  ngOnInit() {
              this.servicios = this.serviciosServices.getServicios();
              this.reportes = this.revisionService.getReportes();
  }

  enviarServicios(form: NgForm){
    
  }

}
