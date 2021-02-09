import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { VehiculoPage } from '../vehiculo/vehiculo.page';

@Component({
  selector: 'app-asignar',
  templateUrl: './asignar.page.html',
  styleUrls: ['./asignar.page.scss'],
})
export class AsignarPage implements OnInit {

  
  conductor = {
    nombre:'Juan',
    departamento:'Ventas',
    licencia:'XL-928264',
    tipo:'B',
    fechaVencimiento:'04-09-2021',
    estado:'Veracruz'
  }
  
  constructor(
    private router:Router
   ) { }

 mostrarVehiculo(){
   this.router.navigate(['/vehiculo'])
 }
  
  
  ngOnInit() {
  }

}
