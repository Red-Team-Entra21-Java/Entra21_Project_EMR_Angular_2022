import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  updateButtonHidden: boolean = true;
  indexUpdatePatient!: number;

  patientList!: Array<any>;
  patient!: any;

  apiUrl: string = 'http://localhost:8080/patient';

  constructor(
    private http: HttpClient
  ) { }


  getAll(): Observable<any> {

    return this.http.get<any>(this.apiUrl);
  }

  getById(patient: any): Observable<any> {

    return this.http.get<any>(this.apiUrl + '/' + patient.id);
  }

  startWith(prefix: any): Observable<any> {

    return this.http.get<any>(this.apiUrl + '/start/' + prefix);
  }

  create(patient: any): Observable<any> {

    return this.http.post<any>(this.apiUrl, patient);
  }

  update(patient: any): Observable<any> {

    return this.http.put<any>(this.apiUrl + '/' + patient.id, patient);
  }

  delete(patient: any): Observable<any> {

    return this.http.delete<any>(this.apiUrl + '/' + patient.id);
  }
}
