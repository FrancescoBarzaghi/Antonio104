import { Component } from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.html',
  styleUrls: ['./barra.css']
})
export class BarraComponent {

  public isMenuOpen: boolean = false;

  constructor() { } // 
 
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenuOnNavigation(): void {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
}