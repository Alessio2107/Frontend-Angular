import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-invio',
  standalone: true,
  imports: [],
  templateUrl: './invio.component.html',
  styleUrl: './invio.component.css'
})
export class InvioComponent {
  @Output() 
  eventomessaggio= new EventEmitter();

  constructor(){}

  inviaMessaggio() {
    var nome = 'Marco';
    var messaggio = `Ciao, sono ${nome}`;
    this.eventomessaggio.emit(messaggio);
  }
}
