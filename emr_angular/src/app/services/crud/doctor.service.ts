import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
    updateButtonHidden: boolean = true;
    indexUpdateDoctor!: number;
  
    doctorList!: Array<any>;
    doctor!: any;
  
    apiUrl: string = 'http://localhost:8080/doctor';
  
    constructor(
      private http: HttpClient
    ) { }
  
  
    getAll(): Observable<any> {
  
      return this.http.get<any>(this.apiUrl);
    }
  
    getById(doctor: any): Observable<any> {
  
      return this.http.get<any>(this.apiUrl + '/' + doctor.id);
    }

    startWith(prefix: any): Observable<any> {

      return this.http.get<any>(this.apiUrl + '/start/' + prefix);
    }
  
    create(doctor: any): Observable<any> {
  
      return this.http.post<any>(this.apiUrl, doctor);
    }
  
    update(doctor: any): Observable<any> {
  
      return this.http.put<any>(this.apiUrl + '/' + doctor.id, doctor);
    }
  
    delete(doctor: any): Observable<any> {
  
      return this.http.delete<any>(this.apiUrl + '/' + doctor.id);
    }
}
