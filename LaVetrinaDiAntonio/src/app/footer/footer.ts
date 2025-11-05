import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-footer',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {

  // Ottiene l'anno corrente da mostrare nel copyright
  currentYear: number = new Date().getFullYear();

  constructor() { }

}