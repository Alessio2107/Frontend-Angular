import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test-ciclo',
  templateUrl: './test-ciclo.component.html',
  styleUrls: ['./test-ciclo.component.css']
})
export class TestCicloComponent {
@Input() testo!:string;
intervallo:any;
constructor(){
  console.log('sono nel costruttore,' , this.testo);
  this.intervallo = setInterval(() =>{
    console.log('messaggio dell intervallo')
  },2000 )
}

ngOnInit() {
 console.log('ngOnInit',this.testo)
  
}
ngOnDestroy(){
  clearInterval(this.intervallo); 
}
}
