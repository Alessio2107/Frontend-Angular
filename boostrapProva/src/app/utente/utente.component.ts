import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.css']
})
export class UtenteComponent {
  @Input() utenti!:Utente[];
  @Input() utente!: Utente;
  @Input() isBoolean!: boolean;
  constructor(){}

}
export interface Utente{
  nome: string,
  cognome: string,
  eta:number
}
