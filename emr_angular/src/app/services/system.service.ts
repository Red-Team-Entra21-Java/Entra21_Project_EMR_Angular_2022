import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { AppointmentService } from './crud/appointment.service';
import { DoctorService } from './crud/doctor.service';
import { PatientService } from './crud/patient.service';
import { UserService } from './crud/user.service';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  currentTitle!: string;
  isLogin!: boolean;
  userLogged!: string;

  constructor(
    private patientService: PatientService,
    private doctorService: DoctorService,
    private appointmentService: AppointmentService,
    private userService: UserService,
  ) { }

  listAllAppointment(): void {
    this.appointmentService
      .getAll()
      .pipe(
        catchError((error) => {
          let appointmentList: Array<any> = new Array();
          appointmentList.push({ 	id: 1, patient_id: 1, doctor_id: 1, date: 2020-12-30, hour: "22:34:00", anamnesis: "Dor de cabeça", prescription: "Paracetamol 8/8h", certificate: "atestado 15 dias", forwarding: "n/h", medicalRelease: "liberado" });      
          return of(appointmentList);
        })
      )
      .subscribe((response) => {
        console.log(response);
        this.appointmentService.appointmentList = response;
      });
  }

  listAllDoctor(): void {
    this.doctorService
      .getAll()
      .pipe(
        catchError((error) => {
          let doctorList: Array<any> = new Array();
          doctorList.push(
            { 
              id: 1,
              name: 'Doctor Teste',
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
          return of(doctorList);
        })
      )
      .subscribe((response) => {
        console.log(response);
        this.doctorService.doctorList = response;
      });
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

  listAllUser(): void {
    this.userService
      .getAll()
      .pipe(
        catchError((error) => {
          let userList: Array<any> = new Array();
          userList.push({ id: 1, name: 'Administrator', login: "admin", email:"admin@emr.com", password: "admin" });
          userList.push({ id: 2, name: 'Doctor', login: "doctor", email:"doctor@emr.com", password: "doctor" });
          userList.push({ id: 3, name: 'User', login: "user", email:"user@emr.com", password: "user" });
          
          return of(userList);
        })
      )
      .subscribe((response) => {
        console.log(response);
        this.userService.userList = response;
      });
  }
}
