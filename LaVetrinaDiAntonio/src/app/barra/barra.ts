import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Per *ngFor e *ngIf (sebbene non usati qui, è buona norma)
import { RouterLink, RouterLinkActive } from '@angular/router'; // <-- IMPORTA QUESTI

@Component({
  selector: 'app-barra',
  standalone: true, // <-- Deve essere standalone
  imports: [
    CommonModule,
    RouterLink,        // <-- AGGIUNGI QUI
    RouterLinkActive   // <-- AGGIUNGI QUI
  ],
  templateUrl: './barra.html',
  styleUrls: ['./barra.css']
})
export class BarraComponent {

  public isMenuOpen: boolean = false;

  constructor() { } 

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenuOnNavigation(): void {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
}