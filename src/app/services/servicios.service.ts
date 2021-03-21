import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicios } from '../interfaces/interfaces-servicios';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor( private http: HttpClient) { }



  getServicios(){
    return this.http.get<Servicios[]>('/assets/data/servicios.json')
  }
  
}
