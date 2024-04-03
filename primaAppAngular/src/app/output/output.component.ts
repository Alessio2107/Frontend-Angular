import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent implements OnInit {
  @Output() 
  evento= new EventEmitter();

  constructor(){}

  ngOnInit() {
    this.evento.emit("ciao-output");
  }

  
}
