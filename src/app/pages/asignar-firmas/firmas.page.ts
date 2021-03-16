import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-firmas',
  templateUrl: './firmas.page.html',
  styleUrls: ['./firmas.page.scss'],
})
export class FirmasPage implements OnInit {

  @Input() signatureEmitted: string;
  constructor() { }

  ngOnInit() {
    
  }
  ver(){
    console.log(this.signatureEmitted);
  }

}
