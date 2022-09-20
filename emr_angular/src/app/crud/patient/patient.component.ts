import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { PatientService } from 'src/app/services/crud/patient.service';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patientList!: Array<any>;       // OS DADOS VINDO DA API SÃO CARREGADOS AQUI 

  constructor(
    public patientService: PatientService,
  ) { }

  ngOnInit(): void {
    this.listAllPatient();
  }

  listAllPatient(): void {
    this.patientService
      .getAll()
      .pipe(
        catchError((error) => {
          let patientList: Array<any> = new Array();
          patientList.push(
            { 
              id: 1,
              name: 'Patient Teste',
              cpf: "1234",
              nameMother: "Mother Teste",
              nameFather: "Father Teste",
              genre: "female",
              birth: 1985-12-30,
              streetName: "Street Teste",
              numberHome: 145,
              district: "Center",
              city: "Teste",
              state: "CA",
              country: "Brazil"
            }
          );

          
          return of(patientList);
        })
      )
      .subscribe((response) => {
        console.log(response);
        this.patientService.patientList = response;
      });
  }

  newPatient(): void {
    this.patientService.updateButtonHidden = true
  }

  updatePatient(patient: any): void {
    this.patientService.updateButtonHidden = false
    this.patientService.patient = patient;
  }
  
  deletePatient(patient: any): void {
    this.patientService
      .delete(patient)
      .pipe(
        catchError((error) => {
          return of(false);
        })
      )
      .subscribe((response: any) => {
        console.log(response);
        if (response) {
          this.patientService.patientList.splice(this.patientService.patientList.indexOf(patient), 1);
        }
      });
  }

}
