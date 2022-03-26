import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecnicoInicioPageRoutingModule } from './tecnico-inicio-routing.module';

import { TecnicoInicioPage } from './tecnico-inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecnicoInicioPageRoutingModule
  ],
  declarations: [TecnicoInicioPage]
})
export class TecnicoInicioPageModule {}
