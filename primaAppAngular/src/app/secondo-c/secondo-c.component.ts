import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-secondo-c',
  standalone: true,
  imports: [],
  templateUrl: './secondo-c.component.html',
  styleUrl: './secondo-c.component.css'
})
export class SecondoCComponent {
  @Output() 
  click1= new EventEmitter();

  constructor(){}

  emettiEvento() {
    this.click1.emit("ciao dal bottone");
  }
}
