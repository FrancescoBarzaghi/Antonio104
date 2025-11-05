import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importa i componenti che vuoi mostrare SOLO qui
import { InfoPanel } from '../info-panel/info-panel';
import { EvidenzaComponent } from '../evidenza/evidenza';

@Component({
  selector: 'app-home',
  standalone: true,
  // Aggiungili agli imports
  imports: [CommonModule, InfoPanel, EvidenzaComponent], 
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

}