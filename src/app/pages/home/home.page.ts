import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slides: { img: string, titulo: string, desc: string }[] = [
    
    {
      img: '/assets/img/unidad.png',
      titulo: 'Unidades Disponibles',
      desc: '4'
    },
    {
      img: '/assets/img/conductor.png',
      titulo: 'choferes disponibles',
      desc: '3'
    },
    {
      img: '/assets/img/reparacion.png',
      titulo: 'Unidades en reparacion',
      desc: '1'
    }
  ];

  constructor() {}

}
