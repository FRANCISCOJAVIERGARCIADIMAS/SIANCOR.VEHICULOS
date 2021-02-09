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
    loadChildren: () => import('./pages/asignar/asignar.module').then( m => m.AsignarPageModule)
  },
  {
    path: 'revision',
    loadChildren: () => import('./pages/revision/revision.module').then( m => m.RevisionPageModule)
  },
  {
    path: 'vehiculo',
    loadChildren: () => import('./pages/vehiculo/vehiculo.module').then( m => m.VehiculoPageModule)
  },
  {
    path: 'documentos',
    loadChildren: () => import('./pages/documentos/documentos.module').then( m => m.DocumentosPageModule)
  },
  {
    path: 'combustible',
    loadChildren: () => import('./pages/combustible/combustible.module').then( m => m.CombustiblePageModule)
  },
  {
    path: 'accesorios',
    loadChildren: () => import('./pages/accesorios/accesorios.module').then( m => m.AccesoriosPageModule)
  },
  {
    path: 'herramientas',
    loadChildren: () => import('./pages/herramientas/herramientas.module').then( m => m.HerramientasPageModule)
  },
  {
    path: 'carroceria',
    loadChildren: () => import('./pages/carroceria/carroceria.module').then( m => m.CarroceriaPageModule)
  },
  {
    path: 'firmas',
    loadChildren: () => import('./pages/firmas/firmas.module').then( m => m.FirmasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
