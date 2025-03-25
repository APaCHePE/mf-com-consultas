import { Component } from '@angular/core';
// import { navigateToUrl } from '@single-spa/navigation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  title = 'menu';
  constructor(
  ) {
    console.log('✅ Ejecutando MenuComponent');
  }
  opciones = [
    { label: 'Contabilidad', icon: 'pi pi-calculator', ruta: '/contabilidad' },
    { label: 'Administración', icon: 'pi pi-briefcase', ruta: '/administracion' },
    { label: 'Seguridad', icon: 'pi pi-shield', ruta: '/seguridad' }
  ];

  navegar(ruta: string) {
    // window.history.pushState(null, '', ruta);
    // dispatchEvent(new PopStateEvent('popstate'));
  }
}
