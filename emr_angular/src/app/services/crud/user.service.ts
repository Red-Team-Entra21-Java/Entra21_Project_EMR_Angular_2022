import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  path: string = "https://pokeapi.co/api/v2"  //URL DA API

  updateButtonHidden: boolean = true;
  indexUpdateUser!: number;

  users: Array<any> = [
    {
      name: "Administrator",
      email: "admin@admin.com",
      login: "admin",
      password: "admin"
    },
    {
      name: "Doctor",
      email: "doctor@doctor.com",
      login: "doctor",
      password: "doctor"
    },
    {
      name: "User",
      email: "user@user.com",
      login: "user",
      password: "user"
    },
    {
      name: "Emerson Seiler",
      email: "seiler@seiler.com",
      login: "seiler",
      password: "123"
    },
    {
      name: "Emerson Seiler",
      email: "seiler@seiler.com",
      login: "1",
      password: "1"
    },
  ]

  constructor(
      private http: HttpClient
  ) { }

  listUser(user: string) {
      console.log(this.path + "/user/" + user);

      return this.http.get<any>(this.path + "/user/" + user)
  }
}
