import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverOpcionesUsuarioComponent } from '../../components/popover-opciones-usuario/popover-opciones-usuario.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slides: { img: string, titulo: string, cantidad: string }[] = [
    
    {
      img: '/assets/img/unidad.png',
      titulo: 'Unidades Disponibles',
      cantidad: '4'
    },
    {
      img: '/assets/img/conductor.png',
      titulo: 'choferes disponibles',
      cantidad: '3'
    },
    {
      img: '/assets/img/reparacion.png',
      titulo: 'Unidades en reparacion',
      cantidad: '1'
    }
  ];

  constructor(private popoverController: PopoverController) {}

  currentPopover: string= null;

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverOpcionesUsuarioComponent,
      event: ev,
      translucent: true,
      backdropDismiss: true,

    });
    await popover.present();
  }
  
  
}
