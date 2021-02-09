import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.page.html',
  styleUrls: ['./herramientas.page.scss'],
})
export class HerramientasPage implements OnInit {

herramientas = {
  refracciondeLlanta:'',
  maneralDadoLlanta:'',
  desarmadorPlanoCruz:'',
  diablo:'',
  juegodecables:'',
  gatoHidraulico:'',
  reflejantes:''
}


  constructor( private router:Router) { }

  ngOnInit() {
  }

  irACarroceria(){
this.router.navigate(['/carroceria'])
  }

}
