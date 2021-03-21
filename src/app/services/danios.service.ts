import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Danios } from '../interfaces/interfaces-danios';

@Injectable({
  providedIn: 'root'
})
export class DaniosService {

  constructor(private http: HttpClient) { }


  getDanios(){
    return this.http.get<Danios[]>('/assets/data/danios.json')
  }
}
