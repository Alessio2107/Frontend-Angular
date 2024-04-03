import { Component } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user!: User;
  indirizzo: string="via napoli";

  setUser(user: User) {
    this.user = user;
  }
  getInDirizzoUser() :string{
     return this.indirizzo;
  }
}
