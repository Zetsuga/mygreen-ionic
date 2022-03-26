import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalIncidenciaPage } from '../modal-incidencia/modal-incidencia.page';
import { ModalPage } from '../modal/modal.page';
import { Fichar } from '../models/fichar';
import { Tarea } from '../models/tarea';
import { Usuario } from '../models/usuario';
import { FicharService } from '../shared/fichar.service';
import { FincaService } from '../shared/finca.service';
import { TareaService } from '../shared/tarea.service';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-trabajador-inicio',
  templateUrl: './trabajador-inicio.page.html',
  styleUrls: ['./trabajador-inicio.page.scss'],
})
export class TrabajadorInicioPage implements OnInit {

  public tareas:Tarea[];
  public tarea:Tarea;
  public indice:number;
  public botonFormulario:boolean;
  public fichar:Fichar;

  constructor(public usuarioService:UsuarioService,private tareaService:TareaService,
        private router:Router,public fincaService:FincaService,private ficharService:FicharService
       ,private modalCtrl:ModalController) {
      this.tarea = new Tarea(0,0,"","","","","");
      this.fichar=new Fichar(this.usuarioService.usuario.id_usuario,new Date,null,null);

      this.indice = 0;

      this.tareaService.buscarTodosUsuario(this.usuarioService.usuario.id_usuario).subscribe((datos:any)=>{
        if(datos.error==true){
        }else{
          this.tareas = datos.resultado;
        }
      })

      this.botonFormulario = true;
  }

  ngOnInit() {
    if(this.usuarioService.logueado==false && this.usuarioService.usuario.rol!="4"){
      this.router.navigateByUrl('/home');
    }
  }

  public desconectar():void{
    this.usuarioService.usuario = new Usuario("","","","",0,"","","","","","");
    this.router.navigateByUrl("/home");
  }

  public async modalIncidencia(){
    const modal = await this.modalCtrl.create({
      component:ModalIncidenciaPage,
      componentProps:{}
    });

    await modal.present();
  }

  public async cargarDatos(id_tarea,prioridad,fecha,descripcion,indice){
    console.log(id_tarea)
    const modal = await this.modalCtrl.create({
      component:ModalPage,
      componentProps:{
        id_tarea: id_tarea,
        prioridad: prioridad,
        fecha : fecha,
        descripcion : descripcion,
        indice:indice
      }
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    this.tareas.splice(data.indice,1)
  }

  public entrada(){
    let date = new Date;
    let hora = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(); 
    this.fichar.entrada = hora;
    this.fichar.id_usuario = this.usuarioService.usuario.id_usuario;
    console.log(this.fichar);
    console.log(this.usuarioService.usuario.id_usuario);
    
    
    this.ficharService.crear(this.fichar).subscribe((datos:any)=>{
      if(datos.error==true){
      }else{
        this.botonFormulario = false;
        this.fichar.id_fichaje=datos.resultado;
      }
    })
  }
  public salida(){
    let date = new Date;
    let hora = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(); 
    this.fichar.salida = hora;
    this.ficharService.modificar(this.fichar).subscribe((datos:any)=>{
      if(datos.error==true){
      }else{
        this.botonFormulario = true;
        this.fichar=new Fichar(this.usuarioService.usuario.id_usuario,new Date,null,null);
      }
    })
  }



}
