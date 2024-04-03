import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { User } from './model/user';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, UserComponent]
})
export class AppComponent {
  title = 'viewChild';
  indirizzo!: string;
  utentePadre:User={
    nome: 'Alessio',
    cognome: 'Salzillo',
    eta:21
  }
  @ViewChild(UserComponent) user !: UserComponent;
  inviaDati(){
    this.user.setUser(this.utentePadre)
    console.log(this.user)
  }
  ngAfterViewInit(): void {
      this.indirizzo=this.user.getInDirizzoUser()
          
  }
  
}
