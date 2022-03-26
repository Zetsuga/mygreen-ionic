import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrabajadorInicioPage } from './trabajador-inicio.page';

const routes: Routes = [
  {
    path: '',
    component: TrabajadorInicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrabajadorInicioPageRoutingModule {}
