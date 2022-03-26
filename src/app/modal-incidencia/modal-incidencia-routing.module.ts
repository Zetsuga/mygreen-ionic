import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalIncidenciaPage } from './modal-incidencia.page';

const routes: Routes = [
  {
    path: '',
    component: ModalIncidenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalIncidenciaPageRoutingModule {}
