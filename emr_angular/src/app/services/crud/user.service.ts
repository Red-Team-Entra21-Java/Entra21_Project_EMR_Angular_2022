import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  updateButtonHidden: boolean = true;
  indexUpdateUser!: number;

  userList!: Array<any>;
  user!: any;

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

  startWith(prefix: any): Observable<any> {

    return this.http.get<any>(this.apiUrl + '/start/' + prefix);
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

  login(user: any): Observable<any> {

    return this.http.post<any>(this.apiUrl + '/login', user);
  }

  getByDoctorId(id: any): Observable<any> {

    return this.http.get<any>(this.apiUrl + '/doctor/' + id);
  }

}