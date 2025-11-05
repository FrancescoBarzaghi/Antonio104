import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraComponent } from './barra/barra';
import { InfoPanel } from './info-panel/info-panel';
import { EvidenzaComponent } from './evidenza/evidenza';
import { FooterComponent } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,BarraComponent,InfoPanel,EvidenzaComponent,FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LaVetrinaDiAntonio');
}
