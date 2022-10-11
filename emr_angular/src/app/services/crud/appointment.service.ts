import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

    updateButtonHidden: boolean = true;
    indexUpdateDoctor!: number;
  
    appointmentList!: Array<any>;
    appointment!: any;
  
    apiUrl: string = 'http://localhost:8080/appointment';
  
    constructor(
      private http: HttpClient
    ) { }
  
  
    getAll(): Observable<any> {
  
      return this.http.get<any>(this.apiUrl);
    }

    getAllResume(): Observable<any> {
  
      return this.http.get<any>(this.apiUrl+ '/resume');
    }
  
    getById(id: any): Observable<any> {
  
      return this.http.get<any>(this.apiUrl + '/' + id);
    }

    startWith(prefix: any): Observable<any> {

      return this.http.get<any>(this.apiUrl + '/start/' + prefix);
    }
  
    create(appointment: any): Observable<any> {
  
      return this.http.post<any>(this.apiUrl, appointment);
    }
  
    update(appointment: any): Observable<any> {
  
      return this.http.put<any>(this.apiUrl + '/' + appointment.id, appointment);
    }
  
    delete(appointment: any): Observable<any> {
  
      return this.http.delete<any>(this.apiUrl + '/' + appointment.id);
    }

    getByPatientId(id: any): Observable<any> {

      return this.http.get<any>(this.apiUrl + '/patient/' + id);
    }

}
