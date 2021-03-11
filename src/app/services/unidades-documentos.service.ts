import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnidadesDocumentosService {
  private noEconomico = new BehaviorSubject<{}>({});
  $getnoEconomico = this.noEconomico.asObservable();

  constructor() { }
  
sendnoEconomico(data:any){
  this.noEconomico.next(data);
}

}
