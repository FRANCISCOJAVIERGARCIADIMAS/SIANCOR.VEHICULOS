import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Unidad } from 'src/app/interfaces/interfaces-unidades';
import { UnidadesTransporteService } from '../../services/unidades-transporte.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.page.html',
  styleUrls: ['./vehiculo.page.scss'],
})
export class VehiculoPage implements OnInit {

  unidades: Observable<Unidad[]>;
  itemSeleccionado: string = '0';

  constructor(
    private router:Router,
    private unidadesTransporteService: UnidadesTransporteService
   ) { }

  
  ngOnInit() {
    this.unidades = this.unidadesTransporteService.getUnidades();
  }
  
  mostrarDocumentos(){
    this.router.navigate(['/documentos'])
  }


}
