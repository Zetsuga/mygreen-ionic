import { Component, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tarea } from '../models/tarea';
import { TareaService } from '../shared/tarea.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() id_tarea:number;
  @Input() descripcion:string;
  @Input() fecha:string;
  @Input() prioridad:string;
  @Input() indice:number;


  
  public tarea:Tarea;

  constructor(private modalCrt : ModalController,private tareaService:TareaService) {
  }

  ngOnInit() {
  }

  public salir(){
    this.modalCrt.dismiss();
  }

  public finalizar(id_tarea,indice){
    this.tareaService.eliminar(id_tarea).subscribe((datos:any)=>{
      if(datos.error==true){
      }else{
        this.modalCrt.dismiss({
          indice:indice
        });
      }
    })
  }

}
