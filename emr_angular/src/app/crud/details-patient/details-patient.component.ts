import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { AppointmentService } from 'src/app/services/crud/appointment.service';
import { PatientService } from 'src/app/services/crud/patient.service';

@Component({
  selector: 'app-details-patient',
  templateUrl: './details-patient.component.html',
  styleUrls: ['./details-patient.component.css']
})
export class DetailsPatientComponent implements OnInit {

  patient!: any;
  appointmentList!: Array<any>;

  constructor(
    private patientService: PatientService,
    private appointmentService: AppointmentService,
  ) { }

  ngOnInit(): void {
    this.patient = this.patientService.patient;
    // this.listAppointmentPatient()
    // console.log(this.patient);
    // console.log(this.appointmentList);
    this.listAllAppointment()
    console.log(this.appointmentList);
    
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
        this.appointmentList = response;
      });
  }


  listAppointmentPatient() {
    console.log(this.appointmentList); 
    for (let count = 0; count < this.appointmentService.appointmentList.length; count++) {
      if (this.appointmentService.appointmentList[count].patient_id === this.patient.id) {
        // this.appointmentList.push(this.appointmentService.appointmentList[count])
      }
    }
  }

}
