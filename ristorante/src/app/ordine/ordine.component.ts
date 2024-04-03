import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ordine',
  standalone: true,
  imports: [Ordine],
  templateUrl: './ordine.component.html',
  styleUrl: './ordine.component.css'
})
export class Ordine{
costoTotaleDellePizze!:number;
@Input() pizze: any[] = [];
  

constructor(){

}
ngOnInit(): void {
  
  
}
aggiungiElemento(pizza:any): void {
  this.pizze.push(pizza);
}
}
