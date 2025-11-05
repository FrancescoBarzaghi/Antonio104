import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private itemsSubject = new BehaviorSubject<any[]>([]);
  public items$ = this.itemsSubject.asObservable();

  constructor() { }

  public addToCart(product: any): void {
    const currentItems = this.itemsSubject.getValue();
    const updatedItems = [...currentItems, product];
    this.itemsSubject.next(updatedItems);
    console.log('Prodotto aggiunto al carrello!', product);
  }
  
  /**
   * NUOVO: Rimuove un prodotto dal carrello usando il suo indice
   */
  public removeFromCart(index: number): void {
    // 1. Prende la lista attuale
    const currentItems = this.itemsSubject.getValue();
    
    // 2. Crea una nuova lista filtrando via l'elemento all'indice specificato
    // (es. se l'indice è 2, questo tiene tutti gli elementi tranne quello a i == 2)
    const updatedItems = currentItems.filter((_, i) => i !== index);
    
    // 3. Notifica a tutti la nuova lista aggiornata
    this.itemsSubject.next(updatedItems);
    
    console.log(`Prodotto all'indice ${index} rimosso.`);
  }

  public getItems(): any[] {
    return this.itemsSubject.getValue();
  }
}