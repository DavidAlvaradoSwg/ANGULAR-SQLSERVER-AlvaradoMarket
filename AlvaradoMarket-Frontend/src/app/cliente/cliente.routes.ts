import { Routes } from '@angular/router';
import { TiendaComponent } from './tienda/tienda'; // Ruta corregida

export const CLIENTE_ROUTES: Routes = [
  {
    path: '',
    component: TiendaComponent
  }
];
