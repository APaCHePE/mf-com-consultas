import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PrimeIcons, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-comercial',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'productos';
  ngOnInit(): void {
    console.log('✅ AppComponent cargado MENU');
  }
}
