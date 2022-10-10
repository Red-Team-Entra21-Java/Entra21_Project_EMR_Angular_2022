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
  user!: Array<any>;
  userLogged!: string;
  userTypeLogged!: string;

  constructor(
    private patientService: PatientService,
    private doctorService: DoctorService,
    private appointmentService: AppointmentService,
    private userService: UserService,
  ) { }

  listAllAppointment(): void {
    this.appointmentService
      .getAllResume()
      .pipe(
        catchError((error) => {
          return of(error);
        })
      )
      .subscribe((response) => {
        this.appointmentService.appointmentList = response;
      });
  }

  listAllDoctor(): void {
    this.doctorService
      .getAll()
      .pipe(
        catchError((error) => {
          return of(error);
        })
      )
      .subscribe((response) => {
        // console.log(response);
        this.doctorService.doctorList = response;
      });
  }

  listAllPatient(): void {
    this.patientService
      .getAll()
      .pipe(
        catchError((error) => {
          return of(error);
        })
      )
      .subscribe((response) => {
        this.patientService.patientList = response;
      });
  }

  listAllUser(): void {
    this.userService
      .getAll()
      .pipe(
        catchError((error) => {
          return of(error);
        })
      )
      .subscribe((response) => {
        this.userService.userList = response;
      });
  }
}
