import { Component } from '@angular/core';

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

  constructor() {}

}
