import { Component, OnInit } from '@angular/core';
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
    this.listAllAppointment(this.patient.id)
    
  }

  listAllAppointment(id: number): void {
    this.appointmentService
      .getByPatientId(id)
      .pipe(
        catchError((error) => {
          let appointmentList: Array<any> = new Array();
          appointmentList.push({ 	id: 1, patient_id: 1, doctor_id: 1, date_appointment: "30/01/2020 22:34", anamnesis: "Dor de cabeça", prescription: "Paracetamol 8/8h", certificate: "atestado 15 dias", forwarding: "n/h", medicalRelease: "liberado" });
          return of(error);
        })
      )
      .subscribe((response) => {
        // console.log(response);
        this.appointmentList = response;
      });
  }


}
