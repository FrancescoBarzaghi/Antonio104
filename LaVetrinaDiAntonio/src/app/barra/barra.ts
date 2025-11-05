import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra', // <-- Questo è il tag HTML
  templateUrl: './barra.html', // <-- Nome file
  styleUrls: ['./barra.css'] // <-- Nome file
})
export class BarraComponent { // <-- Nome della classe

  constructor(private router: Router) { }

  /**
   * Chiamato quando l'utente preme Invio o fa clic sul pulsante Cerca.
   * @param query La stringa inserita dall'utente.
   */
  onSearch(query: string): void {
    if (!query || query.trim() === '') {
      return;
    }

    console.log('Ricerca avviata per:', query);
    
    // Esempio: Naviga a una pagina di risultati di ricerca
    this.router.navigate(['/search'], { queryParams: { q: query } });
  }
}