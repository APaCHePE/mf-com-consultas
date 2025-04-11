import { Component } from '@angular/core';
// import { navigateToUrl } from '@single-spa/navigation';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [ButtonModule]
})
export class MenuComponent {
  constructor(
  ) {
    console.log('✅ Ejecutando MenuComponent');
  }
}
