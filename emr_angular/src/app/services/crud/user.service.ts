import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  updateButtonHidden: boolean = true;
  indexUpdateUser!: number;

  apiUrl: string = 'http://localhost:8080/user';

  constructor(
    private http: HttpClient
  ) { }


  getAll(): Observable<any> {

    return this.http.get<any>(this.apiUrl);
  }

  getById(user: any): Observable<any> {

    return this.http.get<any>(this.apiUrl + '/' + user.id);
  }

  create(user: any): Observable<any> {

    return this.http.post<any>(this.apiUrl, user);
  }

  update(user: any): Observable<any> {

    return this.http.put<any>(this.apiUrl + '/' + user.id, user);
  }

  delete(user: any): Observable<any> {

    return this.http.delete<any>(this.apiUrl + '/' + user.id);
  }














  path: string = "http://localhost:8080/sistema"  //URL DA API


  users: Array<any> = [

  ]

  // constructor(
  //     private http: HttpClient
  // ) { }

  listUser(credentials: string) {
      console.log(this.path+"/login",credentials);

      return this.http.post<any>(this.path+"/login",credentials)
  }

  listAllUsers() {

    return this.http.get<any>(this.path)
  }
}