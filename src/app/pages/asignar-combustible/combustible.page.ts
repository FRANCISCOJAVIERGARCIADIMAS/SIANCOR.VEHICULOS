import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AsignacionModel } from 'src/app/models/asignacion.model';
import { DataAsignacionService } from 'src/app/services/data-asignacion.service';

@Component({
  selector: 'app-combustible',
  templateUrl: './combustible.page.html',
  styleUrls: ['./combustible.page.scss'],
})
export class CombustiblePage implements OnInit {

 
  asignacion = new AsignacionModel();

  constructor(
              private route:Router,
              private dataAsignacion: DataAsignacionService   
              ) { }

  ngOnInit() {  }

  irAAccesorios(){
    this.route.navigate(['/accesorios'])

  }

  enviarNivelCobustible(form: NgForm){
    this.dataAsignacion.sendCombustible(this.asignacion.nivelCombustible);
    this.asignacion.nivelCombustible = form.value;
    console.log( this.asignacion.nivelCombustible); 
  }


// guardar para armar el json completo
  // enviarNivelCobustible(form: NgForm){
  //   this.x = this.asignacion.nivelCombustible;
  //   this.combustible ={ "combustible": this.x }
  //      console.log( this.asignacion.nivelCombustible);
  //      console.log( this.combustible);

  // }
  

}
