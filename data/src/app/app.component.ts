import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProdottoComponent } from "./prodotto/prodotto.component";
import { PreferitoComponent } from "./preferito/preferito.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ProdottoComponent, PreferitoComponent]
})
export class AppComponent {
  title = 'data';

  prodotti: prodotto[]=[{
    nome: 'mela',
    quantita: 10,
    prezzo:2
  },
  {
    nome: 'ananas',
    quantita: 20,
    prezzo:5
  },
  {
    nome: 'arancia',
    quantita: 5,
    prezzo:1
  },
  {
    nome: 'pompelmo',
    quantita: 50,
    prezzo:2
  }
]
prodotto: any;


}

export interface prodotto{
  nome:string,
  quantita:number,
  prezzo:number

}
