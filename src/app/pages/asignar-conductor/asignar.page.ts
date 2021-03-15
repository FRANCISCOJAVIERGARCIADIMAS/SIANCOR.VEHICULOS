import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConductoresService } from '../../services/conductores.service';
import { Persona } from '../../interfaces/interfaces-conductores';
import { Observable } from 'rxjs';
import { DataAsignacionService } from '../../services/data-asignacion.service';
import { AsignacionModel } from '../../models/asignacion.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-asignar',
  templateUrl: './asignar.page.html',
  styleUrls: ['./asignar.page.scss'],
})
export class AsignarPage implements OnInit {

  conductores: Observable<Persona[]>;
  
  asignacion = new AsignacionModel();
  
  constructor(
    private router:Router,
    private conductoresService: ConductoresService,
    private dataAsignacionService: DataAsignacionService
   ) { }

  ngOnInit() {
    this.conductores = this.conductoresService.getConductores();
  }

  mostrarVehiculo(){
     this.router.navigate(['/vehiculo'])
   }

   enviaridconductor( form: NgForm){
    this.asignacion.idConductor = form.value;
    console.log(this.asignacion.idConductor);
    this.dataAsignacionService.sendIdConductor(this.asignacion.idConductor);
   }
}
