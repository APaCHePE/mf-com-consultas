import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'productos/nuevo',
        loadComponent: () => import('./nuevo/nuevo.component').then(m => m.NuevoComponent),
      },
      {
        path: 'productos/modificar',
        loadComponent: () => import('./menu/menu.component').then(m => m.MenuComponent),
      },
      // {
      //   path: 'productos/configurar',
      //   loadComponent: () => import('.//configurar.component').then(m => m.ConfigurarComponent),
      // },
      {
        path: 'productos/dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
      },
      {
        path: '',
        redirectTo: 'productos/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  // {
  //   path: 'productos/modificar',
  //   loadComponent: () => import('./modificar/modificar.component'),
  // },
  // {
  //   path: 'productos/exportar',
  //   loadComponent: () => import('./menu/menu.component'),
  // },
  // {
  //   path: 'productos/configurar',
  //   loadComponent: () => import('./layout/layout.component'),
  // },
  {
    path: '**',
    component: EmptyRouteComponent,
  },
];