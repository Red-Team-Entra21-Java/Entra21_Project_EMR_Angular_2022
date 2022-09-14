import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  path: string = "http://localhost:8080/sistema"  //URL DA API

  updateButtonHidden: boolean = true;
  indexUpdateUser!: number;

  users: Array<any> = [
    
  ]

  constructor(
      private http: HttpClient
  ) { }

  listUser(credentials: string) {
      console.log(this.path+"/login",credentials);

      return this.http.post<any>(this.path+"/login",credentials)
  }
}
