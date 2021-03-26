import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./pages/iniciar-sesion/iniciar-sesion.module').then( m => m.IniciarSesionPageModule)
  },
  {
    path: '',
    redirectTo: 'iniciar-sesion',
    pathMatch: 'full'
    
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
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
    loadChildren: () => import('./pages/asignar-carroceria/carroceria.module').then( m => m.CarroceriaPageModule)
  },
  {
    path: 'firmas',
    loadChildren: () => import('./pages/asignar-firmas/firmas.module').then( m => m.FirmasPageModule)
  },
  {
    path: 'firmas-revision',
    loadChildren: () => import('./pages/revision-firmas/firmas-revision.module').then( m => m.FirmasRevisionPageModule)
  },
  {
    path: 'revision-conductor',
    loadChildren: () => import('./pages/revision-conductor/revision-conductor.module').then( m => m.RevisionConductorPageModule)
  },
  {
    path: 'revision-vehiculo',
    loadChildren: () => import('./pages/revision-vehiculo/revision-vehiculo.module').then( m => m.RevisionVehiculoPageModule)
  },
  {
    path: 'revision-documentos',
    loadChildren: () => import('./pages/revision-documentos/revision-documentos.module').then( m => m.RevisionDocumentosPageModule)
  },
  {
    path: 'revision-nivel-combustible',
    loadChildren: () => import('./pages/revision-nivel-combustible/revision-nivel-combustible.module').then( m => m.RevisionNivelCombustiblePageModule)
  },
  {
    path: 'revision-accesorios',
    loadChildren: () => import('./pages/revision-accesorios/revision-accesorios.module').then( m => m.RevisionAccesoriosPageModule)
  },
  {
    path: 'revision-herramientas',
    loadChildren: () => import('./pages/revision-herramientas/revision-herramientas.module').then( m => m.RevisionHerramientasPageModule)
  },
  {
    path: 'revision-carroceria',
    loadChildren: () => import('./pages/revision-carroceria/revision-carroceria.module').then( m => m.RevisionCarroceriaPageModule)
  },
  {
    path: 'revision-flujo-firmas',
    loadChildren: () => import('./pages/revision-flujo-firmas/revision-flujo-firmas.module').then( m => m.RevisionFlujoFirmasPageModule)
  },
  {
    path: 'reporte',
    loadChildren: () => import('./pages/reporte/reporte.module').then( m => m.ReportePageModule)
  },
  {
    path: 'reporte-datos-generales',
    loadChildren: () => import('./pages/reporte-datos-generales/reporte-datos-generales.module').then( m => m.ReporteDatosGeneralesPageModule)
  },
  {
    path: 'reporte-danios',
    loadChildren: () => import('./pages/reporte-danios/reporte-danios.module').then( m => m.ReporteDaniosPageModule)
  },
  {
    path: 'reporte-servicios',
    loadChildren: () => import('./pages/reporte-servicios/reporte-servicios.module').then( m => m.ReporteServiciosPageModule)
  },
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./pages/iniciar-sesion/iniciar-sesion.module').then( m => m.IniciarSesionPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
