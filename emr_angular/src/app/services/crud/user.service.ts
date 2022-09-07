import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  path: string = "https://pokeapi.co/api/v2"  //URL DA API


  users: Array<any> = [
    {
      login: "admin",
      password: "admin"
    },
    {
      login: "doctor",
      password: "doctor"
    },
    {
      login: "user",
      password: "user"
    }
  ]

  constructor(
      private http: HttpClient
  ) { }

  listUser(user: string) {
      console.log(this.path + "/user/" + user);

      return this.http.get<any>(this.path + "/user/" + user)
  }
}
