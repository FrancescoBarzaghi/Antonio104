import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // <-- DEVE ESSERE QUI
import { BarraComponent } from './barra/barra';
import { FooterComponent } from './footer/footer';
// NON importare più InfoPanel o Evidenza qui

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    BarraComponent,
    FooterComponent 
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal('LaVetrinaDiAntonio');
}