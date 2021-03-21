import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReporteModel } from '../../models/reportes';
import { Danios } from '../../interfaces/interfaces-danios';
import { DaniosService } from '../../services/danios.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reporte-danios',
  templateUrl: './reporte-danios.page.html',
  styleUrls: ['./reporte-danios.page.scss'],
})
export class ReporteDaniosPage implements OnInit {

  danios: Observable<Danios[]>;

  reporte = new ReporteModel();

  constructor( private daniosServices: DaniosService) { }

  ngOnInit() {
              this.danios = this.daniosServices.getDanios();
  }

  enviarServicios(form: NgForm){
    
  }


}
