import { Component, ViewChild } from '@angular/core';

import { Ordine } from "./ordine/ordine.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [ Ordine]
})
export class AppComponent {
  title = 'ristorante';
  costoTotaleDellePizze: number = 0;

  pizze = [
    { nome: 'Margherita',
     prezzo: 4,
      immagine: ''
     },
    { nome: 'Pizza con ananas',
     prezzo: 10,
      immagine: '' },
    { nome: 'Marinara',
     prezzo: 3,
      immagine: '' }
  ];

  @ViewChild(Ordine) ordineComponent!: Ordine;

  aggiornaCostoTotale(pizza: any): void {
    this.costoTotaleDellePizze += pizza.prezzo;
  }
}
