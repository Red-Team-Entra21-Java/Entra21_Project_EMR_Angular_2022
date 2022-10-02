import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { AppointmentService } from 'src/app/services/crud/appointment.service';
import { PatientService } from 'src/app/services/crud/patient.service';
import { SecurityService } from 'src/app/services/security/security.service';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent implements OnInit {

  medicalReleaseBox: Array<String> = ["Released", "internee", "Forwarded Evaluation", "Death"]
  appointment!: any;

  updateButtonHidden: boolean = this.appointmentService.updateButtonHidden;
  patientId!: number | null
  doctor!: any | null
  patient!: any | null
  anamnesis!: string | null
  prescription!: string | null
  certificate!: string | null
  forwarding!: string | null
  medicalRelease!: string | null

  constructor(
    private appointmentService: AppointmentService,
    public patientService: PatientService,
    private router: Router,
    private securityService: SecurityService,

  ) { }

  ngOnInit(): void {
    if(!this.appointmentService.updateButtonHidden) {
      this.appointment = this.appointmentService.appointment;
    } else {
      this.appointment = {};
    }    
  }

  //VERIFICAR
  isLogged() {
    if(this.securityService.authenticated === false) {
      this.router.navigateByUrl("")
    } else {
      this.router.navigateByUrl("appointments")
    }
  }

  createAppointment() {
    this.appointment.doctor = {id: 2}
    this.appointment.patient = {id: this.patientId}
    this.appointmentService
      .create(this.appointment)
      .pipe(
        catchError((error) => {
          //this.doctorService.doctorList.push(this.doctor);   //VERIFICAR
          this.router.navigateByUrl("appointments")           
          return of( this.appointmentService.appointmentList);
        })
      )
      .subscribe((response: any) => {
        // console.log(response);
        if (response) {          
          // this.appointmentService.appointmentList.push(response);
          // console.log(response);        
        }
      });
      this.clearInputs();
      this.router.navigateByUrl("appointments")
  }

  updateAppointment(): void {
    this.appointmentService
      .update(this.appointmentService.appointment)
      .pipe(
        catchError((error) => {
          this.appointmentService.appointmentList[this.appointmentService.appointmentList.indexOf(this.appointmentService.appointment)] = this.appointmentService.appointment;//VERIFICAR
          return of(error);
        })
      )
      .subscribe((response: any) => {
        // console.log(response);
        if (response) {
          this.appointmentService.appointmentList[this.appointmentService.appointmentList.indexOf(this.appointmentService.appointment)] = response;
        }
      });
      this.clearInputs()
      this.router.navigateByUrl("appointments")
  }

  cancelRecord() {
    this.clearInputs()
    this.router.navigateByUrl("appointments")
    
  }

  setPatient(patientId: any) {
    this.patientId = patientId   
  }


  clearInputs() {
    this.doctor = ""
    this.patient = ""
    this.anamnesis = ""
    this.prescription = ""
    this.certificate = ""
    this.certificate = ""
    this.forwarding = ""
    this.medicalRelease = ""
  }

}
