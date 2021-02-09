import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-comentario',
  templateUrl: './agregar-comentario.component.html',
  styleUrls: ['./agregar-comentario.component.scss'],
})
export class AgregarComentarioComponent implements OnInit {
  items = Array(40);

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}

  onClick(valor: number ) {

    this.popoverCtrl.dismiss({
      item:valor
    })

  }

}
