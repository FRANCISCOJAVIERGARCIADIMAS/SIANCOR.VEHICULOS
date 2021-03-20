import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Persona } from '../interfaces/interfaces-conductores';

@Injectable({
  providedIn: 'root'
})
export class ConductoresService {

  constructor( private http: HttpClient) { }


  getConductores(){
    return this.http.get<Persona[]>('/assets/data/conductores.json');
  }
 
}
