import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'asignar',
    loadChildren: () => import('./pages/asignar-conductor/asignar.module').then( m => m.AsignarPageModule)
  },
  {
    path: 'revision',
    loadChildren: () => import('./pages/revision/revision.module').then( m => m.RevisionPageModule)
  },
  {
    path: 'vehiculo',
    loadChildren: () => import('./pages/asignar-vehiculo/vehiculo.module').then( m => m.VehiculoPageModule)
  },
  {
    path: 'documentos',
    loadChildren: () => import('./pages/asignar-vehiculo-documentos/documentos.module').then( m => m.DocumentosPageModule)
  },
  {
    path: 'combustible',
    loadChildren: () => import('./pages/asignar-combustible/combustible.module').then( m => m.CombustiblePageModule)
  },
  {
    path: 'accesorios',
    loadChildren: () => import('./pages/asignar-accesorios/accesorios.module').then( m => m.AccesoriosPageModule)
  },
  {
    path: 'herramientas',
    loadChildren: () => import('./pages/asignar-herramientas/herramientas.module').then( m => m.HerramientasPageModule)
  },
  {
    path: 'carroceria',
    loadChildren: () => import('./pages/carroceria/carroceria.module').then( m => m.CarroceriaPageModule)
  },
  {
    path: 'firmas',
    loadChildren: () => import('./pages/asignar-firmas/firmas.module').then( m => m.FirmasPageModule)
  },
  {
    path: 'problemas-unidad',
    loadChildren: () => import('./pages/revision-problemas-unidad/problemas-unidad.module').then( m => m.ProblemasUnidadPageModule)
  },
  {
    path: 'tipo-servicio',
    loadChildren: () => import('./pages/revision-tipo-servicio/tipo-servicio.module').then( m => m.TipoServicioPageModule)
  },
  {
    path: 'firmas-revision',
    loadChildren: () => import('./pages/revision-firmas/firmas-revision.module').then( m => m.FirmasRevisionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
