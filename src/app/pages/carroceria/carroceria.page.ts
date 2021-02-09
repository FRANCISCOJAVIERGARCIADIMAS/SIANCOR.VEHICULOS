import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carroceria',
  templateUrl: './carroceria.page.html',
  styleUrls: ['./carroceria.page.scss'],
})
export class CarroceriaPage implements OnInit {


  myPhoto: string;
  

  constructor( private router:Router) { }


  savePhoto (event: string) {
    this.myPhoto = event;
  }
  
  ngOnInit() {
  }

  irAFirmas(){
    this.router.navigate(['/firmas'])
  }

}
