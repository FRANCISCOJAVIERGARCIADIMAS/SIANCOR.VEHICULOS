import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-combustible',
  templateUrl: './combustible.page.html',
  styleUrls: ['./combustible.page.scss'],
})
export class CombustiblePage implements OnInit {

  combustible = {
    nivel:'3'
  }
  constructor(private route:Router) { }

  ngOnInit() {
  }
  irAAccesorios(){
    this.route.navigate(['/accesorios'])
  }

}
