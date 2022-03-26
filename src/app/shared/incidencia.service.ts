import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Incidencia } from '../models/incidencia';

@Injectable({
  providedIn: 'root'
})
export class IncidenciaService {

  private url:string;

  constructor(private http:HttpClient) { 

    this.url =`https://mygreenapi.herokuapp.com/incidencia`;

  }

  /*
    La función crear crea en la BD la incidencia que le pasamos como parametro
    hay que pasarle como parámetro el objeto INCIDENCIA
  */
  public crear(incidencia:Incidencia):Observable<object>{
    return this.http.post(this.url,incidencia);
  }
}
