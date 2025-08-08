import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PanelAdminComponent } from './panel-admin/panel-admin.component';
import { ProductosComponent } from './productos/productos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

export const ADMINISTRADOR_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: PanelAdminComponent }, // Ruta por defecto para /administrador
      { path: 'productos', component: ProductosComponent },
      { path: 'usuarios', component: UsuariosComponent }
    ]
  }
];
