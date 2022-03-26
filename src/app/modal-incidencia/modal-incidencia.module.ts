import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalIncidenciaPageRoutingModule } from './modal-incidencia-routing.module';

import { ModalIncidenciaPage } from './modal-incidencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalIncidenciaPageRoutingModule
  ],
  declarations: [ModalIncidenciaPage]
})
export class ModalIncidenciaPageModule {}
