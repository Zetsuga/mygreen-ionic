import { Injectable } from '@angular/core';
import { Finca } from '../models/finca';

@Injectable({
  providedIn: 'root'
})
export class FincaService {

  public finca:Finca;
  public url:string;
  public url2:string;

  constructor() { 

    this.finca = new Finca("",0,"","",0,0);

    this.url =`https://mygreenapi.herokuapp.com/usuario`;
    this.url2 =`https://mygreenapi.herokuapp.com/usuarioFinca`;
  }
}
