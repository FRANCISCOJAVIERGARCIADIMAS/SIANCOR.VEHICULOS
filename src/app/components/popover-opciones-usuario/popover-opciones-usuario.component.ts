import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popover-opciones-usuario',
  templateUrl: './popover-opciones-usuario.component.html',
  styleUrls: ['./popover-opciones-usuario.component.scss'],
})
export class PopoverOpcionesUsuarioComponent implements OnInit {

  constructor(
              private popoverController: PopoverController,
              private router: Router ) { }

  ngOnInit() {}

  onClick( ) {
    this.popoverController.dismiss({
    })
    
    this.router.navigate(["/"])

  }

  

}
