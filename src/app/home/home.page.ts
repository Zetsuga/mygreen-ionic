import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Finca } from '../models/finca';
import { Usuario } from '../models/usuario';
import { FincaService } from '../shared/finca.service';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public usuario:Usuario;

  constructor(public usuarioService:UsuarioService,private router:Router,
    private fincaService:FincaService) {
    this.usuario = new Usuario("","","","",0,"","","","","","");

  }

  public onSubmit(form:NgForm){
    this.usuarioService.login(this.usuario).subscribe((datos:any)=>{
      
      if(datos.error==true){
        this.usuarioService.logueado = false;
        this.usuario= new Usuario("","","","",0,"","","","","","");
      }else{
        this.usuarioService.logueado = true;
        this.usuarioService.usuario = datos.resultado[0];
        this.fincaService.finca.id_finca = datos.resultado[0].id_finca;

        if(datos.resultado[0].rol == "4"){
          this.router.navigateByUrl('/trabajador-inicio');
        }else{
          this.router.navigateByUrl('/home');
        }
        
      }
    })
  }

}
