import { Component, Input } from '@angular/core';
import { prodotto } from '../app.component';

@Component({
  selector: 'app-prodotto',
  standalone: true,
  imports: [],
  templateUrl: './prodotto.component.html',
  styleUrl: './prodotto.component.css'
})
export class ProdottoComponent {
@Input()
spesa!: prodotto[];
}
