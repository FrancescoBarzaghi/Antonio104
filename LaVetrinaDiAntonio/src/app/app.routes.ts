import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { CatalogoComponent } from './catalogo/catalogo';
// CORREZIONE: Importa dal file .component.ts
import { CarrelloComponent } from './carrello/carrello'; 

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'carrello', component: CarrelloComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
];