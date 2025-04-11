import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menuItems = [
    { path: '/productos/dashboard', icon: 'dashboard', label: 'Dashboard' },
    { path: '/productos/nuevo', icon: 'add', label: 'Nuevo Producto' },
    { path: '/productos/modificar', icon: 'edit', label: 'Modificar Producto' },
    // { path: '/productos/exportar', icon: 'download', label: 'Exportar' },
    { path: '/productos/configurar', icon: 'settings', label: 'Configuración' }
  ];

  constructor(private router: Router) {}

  isActive(path: string): boolean {
    return this.router.isActive(path, {
      paths: 'subset',
      queryParams: 'subset',
      fragment: 'ignored',
      matrixParams: 'ignored'
    });
  }
}