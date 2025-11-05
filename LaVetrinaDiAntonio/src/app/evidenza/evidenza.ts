import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-evidenza',
  imports: [CommonModule,RouterLink],
  standalone: true,
  templateUrl: './evidenza.html',
  styleUrls: ['./evidenza.css']
})
export class EvidenzaComponent {

  itemsInEvidenza = [
    {
      nome: 'JACK DANIELS ALLA MELA',
      imageUrl: 'assets/jack.jpg' 
    },
    {
      nome: 'ABSOLUT VODKA',
      imageUrl: 'assets/vodka.jpg'
    },
    {
      nome: 'JÄGERMEISTER',
      imageUrl: 'assets/jager.jpg'
    }
  ];

  constructor() { }

}