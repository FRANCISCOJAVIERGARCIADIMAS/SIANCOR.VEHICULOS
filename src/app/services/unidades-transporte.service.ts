import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
