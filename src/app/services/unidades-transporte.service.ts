import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Unidad } from '../interfaces/interfaces-unidades';


@Injectable({
  providedIn: 'root'
})
export class UnidadesTransporteService {

  constructor(private http:HttpClient) { }

  getUnidades(){
    return this.http.get<Unidad[]>('/assets/data/unidadesdeTransporte.json');
  }
}
