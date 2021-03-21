import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Asignaciones } from '../interfaces/interfaces-asignaciones';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataAsignacionService {

  private idConductor = new BehaviorSubject<{}>({});
  $getidConductor = this.idConductor.asObservable();

  private noEconomico = new BehaviorSubject<{}>({});
  $getnoEconomico = this.noEconomico.asObservable();

  private documentos = new BehaviorSubject<{}>({});
  $getDocumentos = this.documentos.asObservable();

  private combustible = new BehaviorSubject<{}>({});
  $getCombustible = this.documentos.asObservable();

  private accesorios = new BehaviorSubject<{}>({});
  $getAccesorios = this.documentos.asObservable();

  private herramientas = new BehaviorSubject<{}>({});
  $getHerramientas = this.documentos.asObservable();

  constructor(
              private http: HttpClient
            ) { }
  
sendnoEconomico(data:any){
  this.noEconomico.next(data);
}
sendIdConductor(data:any){
  this.idConductor.next(data);
}
sendDocumentos(data:any){
  this.documentos.next(data);
}
sendCombustible(data:any){
  this.documentos.next(data);
}
sendAccesorios(data:any){
  this.documentos.next(data);
}
sendHerramientas(data:any){
  this.documentos.next(data);
}

getAsignaciones(){
  return this.http.get<Asignaciones[]>('/assets/data/asignaciones.json');
}

}