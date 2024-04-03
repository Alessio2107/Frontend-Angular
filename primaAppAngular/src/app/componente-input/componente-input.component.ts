import { Component, Input } from '@angular/core';
import { User } from '../model/User';

@Component({
  selector: 'app-componente-input',
  standalone: true,
  imports: [],
  templateUrl: './componente-input.component.html',
  styleUrl: './componente-input.component.css'
})
export class ComponenteInputComponent {
  @Input() utenteFiglio! : User;
  @Input() numeroFiglio! : number;

  constructor(){}

}
