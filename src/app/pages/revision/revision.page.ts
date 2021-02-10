import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-revision',
  templateUrl: './revision.page.html',
  styleUrls: ['./revision.page.scss'],
})
export class RevisionPage implements OnInit {

  datosGenerales = {
    nombre:'Javier',
    fecha:'2008-09-02',
    economico:'XL-928264',
    camioneta:'B',
    placas:'04-09-2021',
    kilometraje:'Veracruz',
    operador:'Juan'
  }


  constructor(private router:Router) {
    
   }

  ngOnInit() {
  }

  mostrarProblemas(){
    this.router.navigate(['/problemas-unidad']);
  }

}
