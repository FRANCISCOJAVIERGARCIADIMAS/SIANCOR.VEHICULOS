import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Asignaciones } from '../interfaces/interfaces-asignaciones';
import { BehaviorSubject } from 'rxjs';
import { Reportes } from '../interfaces/interfaces-reportes';

@Injectable({
  providedIn: 'root'
})
export class RevisionService {


  private folioAsignacion = new BehaviorSubject<{}>({});
  $getFolioAsignacion = this.folioAsignacion.asObservable();

  constructor(
                private http: HttpClient
              ) { }

  
  sendFolioAsignacion(data:any){
    this.folioAsignacion.next(data);
  }
  // obtener asignaciones
  getAsignaciones(){
    return this.http.get<Asignaciones[]>('/assets/data/asignaciones.json');
  }
  // obtener reportes 
  getReportes(){
    return this.http.get<Reportes[]>('/assets/data/reportes.json');
  }



}
