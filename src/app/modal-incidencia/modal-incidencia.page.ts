import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Incidencia } from '../models/incidencia';
import { FincaService } from '../shared/finca.service';
import { IncidenciaService } from '../shared/incidencia.service';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-modal-incidencia',
  templateUrl: './modal-incidencia.page.html',
  styleUrls: ['./modal-incidencia.page.scss'],
})
export class ModalIncidenciaPage implements OnInit {

  public incidencia:Incidencia;

  constructor(private modalCrt: ModalController,private incidenciaService:IncidenciaService
    ,private usuarioService:UsuarioService,private fincaService:FincaService) { 
    this.incidencia = new Incidencia(this.usuarioService.usuario.id_usuario,this.fincaService.finca.id_finca
      ,new Date,true,"","","");
  }

  ngOnInit() {
  }


  public salir(){
    this.modalCrt.dismiss();
  }

  public guardar(texto){
    this.incidencia.descripcion = texto;
    this.incidenciaService.crear(this.incidencia).subscribe((datos:any)=>{
      if(datos.error==true){
      }else{
        this.modalCrt.dismiss();
      }
    })
  }
}
