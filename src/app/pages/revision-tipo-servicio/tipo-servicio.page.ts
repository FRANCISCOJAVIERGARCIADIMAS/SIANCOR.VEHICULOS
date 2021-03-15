import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-servicio',
  templateUrl: './tipo-servicio.page.html',
  styleUrls: ['./tipo-servicio.page.scss'],
})
export class TipoServicioPage implements OnInit {

  tipodeServicio = {
    correctivo:'',
    preventivoMayor:'',
    preventivoMedio:'',
    preventivoMenor:'',
    alineamientoBalanceado:'',
    rotulacion:'',
    muelles:'',
    serviciodeLavado:'',
    vestiduras:''
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }
  irAFirmasRevision(){
this.router.navigate(['/firmas-revision'])
  }

}
