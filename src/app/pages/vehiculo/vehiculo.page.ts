import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnidadesTransporteService } from '../../services/unidades-transporte.service';
import { Unidad } from '../../interfaces/interfaces-unidades';
import { Observable } from 'rxjs';
import { UnidadesDocumentosService } from '../../services/unidades-documentos.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.page.html',
  styleUrls: ['./vehiculo.page.scss'],
})
export class VehiculoPage implements OnInit {

  unidades: Observable<Unidad[]>;

 itemSeleccionado: string = ' ';

 noEco: string = '';
  // verSeleccio: string = ' ';


  constructor(
    private router:Router,
    private unidadesServices: UnidadesTransporteService,
    private unidadesDocumentos: UnidadesDocumentosService
   ) { }

  
  ngOnInit() {
    this.unidades = this.unidadesServices.getUnidades();
   
  }

  enviarnoEco(){
    this.unidadesDocumentos.sendnoEconomico(this.itemSeleccionado)
  }
  
  mostrarDocumentos(){
    this.router.navigate(['/documentos'])
    this.enviarnoEco();
  }

// Metodo para capturar el vlor enviado
  //   capturar2(){
  //   this.verSeleccio = this.itemSeleccionado;
  //   console.log(this.verSeleccio  );
  // }


}
