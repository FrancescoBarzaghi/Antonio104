import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart'; // <-- 1. IMPORTA IL SERVIZIO
import { Observable } from 'rxjs'; // <-- 2. IMPORTA OBSERVABLE
import { RouterLink } from '@angular/router'; // <-- 1. IMPORTA RouterLink

@Component({
  selector: 'app-carrello',
  standalone: true,
  imports: [CommonModule,RouterLink], // CommonModule serve per *ngFor e | async
  templateUrl: './carrello.html',
  styleUrls: ['./carrello.css']
})
export class CarrelloComponent {

  // 3. CREA UNA VARIABILE PER GLI OGGETTI
  // Questa variabile "osserva" in tempo reale la lista 
  // di prodotti che si trova nel servizio.
  public items$: Observable<any[]>;

  // 4. INIETTA IL SERVIZIO NEL COSTRUTTORE
  constructor(private cartService: CartService) {
    // 5. Collega la nostra variabile locale (items$)
    // alla variabile pubblica del servizio (items$)
    this.items$ = this.cartService.items$;
  }
  public onRemoveFromCart(index: number): void {
    this.cartService.removeFromCart(index);
  }
}