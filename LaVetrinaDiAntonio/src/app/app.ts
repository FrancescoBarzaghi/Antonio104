import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraComponent } from './barra/barra';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,BarraComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LaVetrinaDiAntonio');
}
