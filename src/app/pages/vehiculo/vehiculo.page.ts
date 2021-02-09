import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.page.html',
  styleUrls: ['./vehiculo.page.scss'],
})
export class VehiculoPage implements OnInit {

  vehiculo = {
    noEco:'21',
    marca:'Ford',
    modelo:'2019',
    tipo:'Redilas',
    noSerie:'192-333-452',
    placas:'FD-234-JSK'
  }
  

  constructor(
    private router:Router
   ) { }

  mostrarDocumentos(){
    this.router.navigate(['/documentos'])
  }

  ngOnInit() {
  }

}
