import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart';

/**
 * 1. DEFINIAMO LA FORMA (Interfaccia)
 * Stiamo dicendo a TypeScript che i nostri prodotti HANNO 
 * nome, imageUrl, prezzo e (opzionalmente) isAdded.
 */
interface Prodotto {
  nome: string;
  imageUrl: string;
  prezzo: string;
  isAdded?: boolean; // <-- Il '?' significa che è opzionale
}


@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo.html', // Assicurati che i nomi dei file siano corretti
  styleUrls: ['./catalogo.css']
})
export class CatalogoComponent {

  /**
   * 2. APPLICHIAMO L'INTERFACCIA
   * Diciamo che 'prodottiCatalogo' è un array di 'Prodotto'
   */
  prodottiCatalogo: Prodotto[] = [
    { nome: 'Rémy Martin Louis XIII Cognac', imageUrl: 'assets/Cognac.jpg', prezzo: '€2500.99' },
    { nome: 'Macallan 25 Year Old Sherry Oak', imageUrl: 'assets/Scotch.jpg', prezzo: '€2000.99' },
    { nome: 'Patrón Gran Burdeos Tequila Añejo', imageUrl: 'assets/Tequila.jpg', prezzo: '€300.99' },
    { nome: 'Hennessy Paradis Imperial Cognac', imageUrl: 'assets/Hennesy.jpg', prezzo: '€999.99' },
    { nome: 'Dom Pérignon Rosé Vintage Champagne', imageUrl: 'assets/don.jpg', prezzo: '€400.99' },
    { nome: 'Campari', imageUrl: 'assets/campari.jpg', prezzo: '€22.50' },
    { nome: 'Smirnoff Vodka Red Label', imageUrl: 'assets/vdk.jpg', prezzo: '€22.00' },
    { nome: 'Vecchio Amaro del Capo', imageUrl: 'assets/amaro.jpg', prezzo: '€17.50' },
    { nome: 'Amaro Montenegro', imageUrl: 'assets/monte.jpg', prezzo: '€23.00' },
    { nome: 'Brandy Italiano di Lusso (Riserva Ultra-Premium)', imageUrl: 'assets/Brz.jpg', prezzo: '€1555.00' },
  ];

  constructor(private cartService: CartService) { }

  /**
   * 3. USIAMO L'INTERFACCIA
   * Ora TypeScript sa che 'prodotto' è di tipo 'Prodotto'
   */
  public onAddToCart(prodotto: Prodotto): void {
    this.cartService.addToCart(prodotto);
    
    // Ora TypeScript non darà più errore!
    prodotto.isAdded = true;

    setTimeout(() => {
      prodotto.isAdded = false;
    }, 1500);
  }

}