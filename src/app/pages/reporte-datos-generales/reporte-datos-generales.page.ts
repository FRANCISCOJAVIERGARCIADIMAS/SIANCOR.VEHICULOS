import { Component, OnInit } from '@angular/core';
import { ReporteModel } from '../../models/reportes';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reporte-datos-generales',
  templateUrl: './reporte-datos-generales.page.html',
  styleUrls: ['./reporte-datos-generales.page.scss'],
})
export class ReporteDatosGeneralesPage implements OnInit {
  
  reporte = new ReporteModel();
  myPhoto: string;
  
 
  constructor(
    private router:Router ) { }

  ngOnInit() {
  }
  
  savePhoto (event: string) {
    this.myPhoto = event;
  }

  irAReporteServicios(){
    this.router.navigate(['/reporte-servicios'])
  }

  enviarDatosGenerales(form: NgForm){


  }
  irAReporteDanios(){
    this.router.navigate(['/reporte-danios'])

  }

}
