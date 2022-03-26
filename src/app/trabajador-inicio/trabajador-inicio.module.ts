import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrabajadorInicioPageRoutingModule } from './trabajador-inicio-routing.module';

import { TrabajadorInicioPage } from './trabajador-inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrabajadorInicioPageRoutingModule
  ],
  declarations: [TrabajadorInicioPage]
})
export class TrabajadorInicioPageModule {}
