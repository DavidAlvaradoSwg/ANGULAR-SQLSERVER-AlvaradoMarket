import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'cliente',
    pathMatch: 'full'
  },
  {
    path: 'cliente',
    loadChildren: () => import('./cliente/cliente.routes').then(m => m.CLIENTE_ROUTES)
  },
  {
    path: 'administrador',
    loadChildren: () => import('./administrador/administrador.routes').then(m => m.ADMINISTRADOR_ROUTES)
  },
  {
    path: 'empleado',
    loadChildren: () => import('./empleado/empleado.routes').then(m => m.EMPLEADO_ROUTES)
  },
  {
    path: '**',
    redirectTo: 'cliente'
  }
];
