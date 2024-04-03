import { Component } from '@angular/core';
import {  Users } from './model/users';
import { RestService } from './services/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'provaService';


  allUsers : Users[] = [];

  user= new Users();
  constructor(private rest: RestService) {

  };

  ngOnInit() {
    this.rest.getAllUsers().subscribe({
      next:(res:any) => console.log(res)
    });        
  }

  addUser(){
    this.rest.addUser(this.user).subscribe(data=> console.log)
  }


}
