import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AgregarComentarioComponent } from '../../components/agregar-comentario/agregar-comentario.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.page.html',
  styleUrls: ['./documentos.page.scss'],
})
export class DocumentosPage implements OnInit {

  documentos = {
    placasCirculacion:false,
    tarjetaCirculacion:false,
    polizaSeguro:true,
    verificacionVehicular:'semestre',
    tenencia:true,
    engomadoPlacas:true,
    comentario:''
  }



  constructor( private popoverCtrl: PopoverController, private router:Router) { }


  irACombustible(){
    this.router.navigate(['/combustible'])
  }

  agregarComentario(){
this.router.navigate(['/'])
  }

  ngOnInit() {
  }

  async agregarcomentario(){

    const popover = await this.popoverCtrl.create({
      component: AgregarComentarioComponent,
      translucent: true,
      
    });
    await popover.present();

  }

}
