import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firmas-revision',
  templateUrl: './firmas-revision.page.html',
  styleUrls: ['./firmas-revision.page.scss'],
})
export class FirmasRevisionPage implements OnInit {


  pintar1:string = "";
  pintar2:string = "";
  pintar3:string = "";
  pintar4:string = "";
  pintar5:string = "";
  constructor() { 
  }

  ngOnInit( ) {
    this.reset();
  }

  reset(){
    this.pintar1="x";
    this.pintar2="x";
    this.pintar3="x";
    this.pintar4="x";
    this.pintar5="x";
  }

  valor ( valor:number){

    if(valor==1){
     console.log('valor 1')
    this.pintar1="pintar";
    this.pintar2="";
    this.pintar3="";
    this.pintar4="";
    this.pintar5="";

    }
    if(valor==2){
      console.log('valor 2')
     this.pintar1="pintar";
     this.pintar2="pintar";
     this.pintar3="";
     this.pintar4="";
     this.pintar5="";
     }
     if(valor==3){
      console.log('valor 3')
     this.pintar1="pintar";
     this.pintar2="pintar";
     this.pintar3="pintar";
     this.pintar4="";
     this.pintar5="";
     }
     if(valor==4){
      console.log('valor 4')
     this.pintar1="pintar";
     this.pintar2="pintar";
     this.pintar3="pintar";
     this.pintar4="pintar";
     this.pintar5="";
     }
     if(valor==5){
      console.log('valor 5')
     this.pintar1="pintar";
     this.pintar2="pintar";
     this.pintar3="pintar";
     this.pintar4="pintar";
     this.pintar5="pintar";
     }

   
  }

}
