import { Component, Input } from '@angular/core';
import { Utente } from './utente/utente.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  title = 'bootstrapProva';
  isColorato: boolean=false;
  nascondiCognomiVar: boolean = false;
  nascondiNomiVar: boolean = false;

  view:boolean=false;
  distruggi=false;

  utenti2:any[]=[{
    nome: 'alessio',
    cognome: 'salzillo',

  },
  {
    nome: 'Giorgio',
    cognome: 'salzillo',

  },

]
date=new Date();
  

  utenti=[
    {
      nome: 'alessio',
      cognome: 'salzillo',
      eta:21
    },
    {
      nome: 'Giorgio',
      cognome: 'Rossi',
      eta:12
    },
    {
      nome: 'Giovanni',
      cognome: 'Napoli',
      eta:30
    },
    {
      nome: 'Marco',
      cognome: 'Bianchi',
      eta:15
    },
  ]

  


  mostraColori() {
    this.isColorato=!this.isColorato;
  }
  nascondiCognomi(){
    this.nascondiCognomiVar = !this.nascondiCognomiVar;
  }
  nascondiNomi(){
    this.nascondiNomiVar = !this.nascondiNomiVar; 
  }
  

}
