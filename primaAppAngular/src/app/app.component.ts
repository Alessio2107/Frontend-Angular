import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteInputComponent } from './componente-input/componente-input.component';
import { User } from './model/User';
import { OutputComponent } from "./output/output.component";
import { SecondoCComponent } from "./secondo-c/secondo-c.component";
import { InvioComponent } from "./invio/invio.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        ComponenteInputComponent,
        OutputComponent,
        SecondoCComponent,
        InvioComponent
    ]
})

export class AppComponent {
numeroDItelefonio: number =523145512;
eventoInArrivo!: string;



  title = 'appAngular';
  utente : User ={
    id:1,
    nome:"Alessio",
    cognome:"Salzillo",
    email: "sdfcawsefa"
  }

  logEvento(e: any){
    console.log(e);
  }
  riceviEvento(b: any){
    console.log(b)
    this.eventoInArrivo=b;
  }

  riceviMessaggio(messaggio: any) {
    console.log(`Messaggio dal figlio: ${messaggio}`);
  }

  coloreSelezionato!: string;

  
  selezionaColore(colore: string) {
    this.coloreSelezionato=colore;
  }

}
