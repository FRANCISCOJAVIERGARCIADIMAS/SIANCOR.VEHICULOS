import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConductoresService } from '../../services/conductores.service';
import { Persona } from '../../interfaces/interfaces-conductores';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-asignar',
  templateUrl: './asignar.page.html',
  styleUrls: ['./asignar.page.scss'],
})
export class AsignarPage implements OnInit {

  conductores: Observable<Persona[]>;
  itemSeleccionado: string = ' ';
  verSeleccion: string = '';
  
  constructor(
    private router:Router,
    private conductoresService: ConductoresService
   ) { }

  ngOnInit() {
    this.conductores = this.conductoresService.getConductores();
  }

  capturar(){
    

    this.verSeleccion = this.itemSeleccionado;
    console.log(this.verSeleccion);
  }
  

  // Metodo para capturar el vlor enviado

  mostrarVehiculo(){
     this.router.navigate(['/vehiculo'])
   }

}
