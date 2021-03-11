import { Component, OnInit, Output, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AgregarComentarioComponent } from '../../components/agregar-comentario/agregar-comentario.component';
import { Router } from '@angular/router';
import { UnidadesDocumentosService } from '../../services/unidades-documentos.service';
import { UnidadesTransporteService } from 'src/app/services/unidades-transporte.service';
import { Unidad } from 'src/app/interfaces/interfaces-unidades';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.page.html',
  styleUrls: ['./documentos.page.scss'],
})
export class DocumentosPage implements OnInit {

 

  unidades: Observable<Unidad[]>;

  noEco: string = 'x' ;

  noEcoDocs:any;


  constructor( 
      private popoverCtrl: PopoverController,
      private router:Router,
      private unidadesDocumentos: UnidadesDocumentosService,
      private unidadesServices: UnidadesTransporteService,
      ) { }


  irACombustible(){
    this.router.navigate(['/combustible'])
  }

  agregarComentario(){
this.router.navigate(['/'])
  }

  ngOnInit() {
    this.unidades = this.unidadesServices.getUnidades();
  this.obtenernoEco();
    
  }

  obtenernoEco(){
    this.unidadesDocumentos.$getnoEconomico.subscribe( data => {
      this.noEcoDocs = data;
      this.noEco = this.noEcoDocs; 
    }).unsubscribe();
  }

  async agregarcomentario(){

    const popover = await this.popoverCtrl.create({
      component: AgregarComentarioComponent,
      translucent: true,
      
    });
    await popover.present();

  }


}
