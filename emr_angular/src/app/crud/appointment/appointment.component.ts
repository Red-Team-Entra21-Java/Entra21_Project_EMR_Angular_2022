import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { AppointmentService } from 'src/app/services/crud/appointment.service';
import { DoctorService } from 'src/app/services/crud/doctor.service';
import { PatientService } from 'src/app/services/crud/patient.service';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  
  localAppointmentList: Array<any> = [];
  appointmenttList!: Array<any>;       // OS DADOS VINDO DA API SÃO CARREGADOS AQUI 
  appointmentIdSelected!: number;
  prefix!: string;

  constructor(
    public appointmentService: AppointmentService,
    public patientService: PatientService,
    public doctorService: DoctorService,
    public system: SystemService,
    private router: Router,
  ) { }


  ngOnInit(): void {
    this.listAllAppointmentResume();
    this.sendTitle();
    // this.listAppointmentTable()
  }

  listAllAppointmentResume(): void {
    this.appointmentService
      .getAllResume()
      .pipe(
        catchError((error) => {
          let appointmentList: Array<any> = new Array();
          appointmentList.push({ 	id: 1, patient_id: 1, doctor_id: 1, date_appointment: "30/01/2020 22:34", anamnesis: "Dor de cabeça", prescription: "Paracetamol 8/8h", certificate: "atestado 15 dias", forwarding: "n/h", medicalRelease: "liberado" });
          return of(appointmentList);
        })
      )
      .subscribe((response) => {
        // console.log(response);
        this.appointmentService.appointmentList = response;
      });
  }


  listAllAppointment(): void {
    this.appointmentService
      .getAll()
      .pipe(
        catchError((error) => {
          let appointmentList: Array<any> = new Array();
          appointmentList.push({ 	id: 1, patient_id: 1, doctor_id: 1, date_appointment: "30/01/2020 22:34", anamnesis: "Dor de cabeça", prescription: "Paracetamol 8/8h", certificate: "atestado 15 dias", forwarding: "n/h", medicalRelease: "liberado" });
          return of(appointmentList);
        })
      )
      .subscribe((response) => {
        // console.log(response);
        this.appointmentService.appointmentList = response;
      });
  }

  newAppointment(): void {
    this.appointmentService.updateButtonHidden = true
  }

  // updateAppointment2(appointment: any): void {
  //   this.appointmentService.updateButtonHidden = false
  //   this.appointmentService.appointment = appointment;
  //   console.log(appointment);
    
  // }

  updateAppointment(id: any):void {
    this.appointmentService.updateButtonHidden = false
    this.appointmentService
    .getById(id)
    .pipe(
      catchError((error) => {
        return of(false);
      })
      )
      .subscribe((response: any) => {
        // console.log(response);
        this.appointmentService.appointment = response;
        this.router.navigateByUrl("new-appointment")
      });
  }

  
  deleteAppointment(appointment: any): void {
    this.appointmentService
      .delete(appointment)
      .pipe(
        catchError((error) => {
          return of(false);
        })
      )
      .subscribe((response: any) => {
        // console.log(response);
        if (response) {
          this.appointmentService.appointmentList.splice(this.appointmentService.appointmentList.indexOf(appointment), 1);
        }
      });
  }
  findAppointment(prefix: string) {
    if(prefix === "" ) {
      this.listAllAppointmentResume()
    } else {
      this.appointmentService
      .startWith(prefix)
      .pipe(
        catchError((error) => {
          return of(false);
        })
        )
        .subscribe((response: any) => {
          // console.log(response);
          this.appointmentService.appointmentList = response;
        });
    }
  }

  detailAppointment(id: any):void {
    this.appointmentService
    .getById(id)
    .pipe(
      catchError((error) => {
        return of(false);
      })
      )
      .subscribe((response: any) => {
        // console.log(response);
        this.appointmentService.appointment = response;
        this.router.navigateByUrl("detail-appointment")
      });
  }

  sendTitle() {
    this.system.currentTitle = "Appointments"
  }

  saveAppointmentId(appointmentId: number) {
    this.appointmentIdSelected = appointmentId;
  }

  allowedUser(): boolean {
    if(this.system.userTypeLogged === 'Doctor' || this.system.userTypeLogged === 'Admin' ) {
      return true;
    } else {
      return false;
    }
  }
}
