import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecnicoInicioPage } from './tecnico-inicio.page';

const routes: Routes = [
  {
    path: '',
    component: TecnicoInicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnicoInicioPageRoutingModule {}
