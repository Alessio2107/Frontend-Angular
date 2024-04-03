import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../environments/environment';
import { Users } from '../model/users';
import { json } from 'express';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  url=environments.url;

  getAllUsers(){
    return this.http.get(`${this.url}/user`)
  }

  addUser(user: Users){
    const userString= JSON.stringify(user);
    const header={'content-type': 'application/json'}
    return this.http.post(`${this.url}/user`, userString,{'headers': header})

  }
}
