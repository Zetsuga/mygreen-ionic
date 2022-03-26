import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tecnico-inicio',
    loadChildren: () => import('./tecnico-inicio/tecnico-inicio.module').then( m => m.TecnicoInicioPageModule)
  },
  {
    path: 'trabajador-inicio',
    loadChildren: () => import('./trabajador-inicio/trabajador-inicio.module').then( m => m.TrabajadorInicioPageModule)
  },
  {
    path: 'modal-incidencia',
    loadChildren: () => import('./modal-incidencia/modal-incidencia.module').then( m => m.ModalIncidenciaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
