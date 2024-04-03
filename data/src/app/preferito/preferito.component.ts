import { Component, Input } from '@angular/core';
import { prodotto } from '../app.component';

@Component({
  selector: 'app-preferito',
  standalone: true,
  imports: [],
  templateUrl: './preferito.component.html',
  styleUrl: './preferito.component.css'
})
export class PreferitoComponent {

@Input()
prodottoPrefe!: preferito;

preferito: prodotto={
  nome: 'mela',
  quantita: 10,
  prezzo:2
}

}

