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
          appointmentList.push(
            {
              id: 1,
              date_appointment: "02/10/2022 19:13",
              anamnesis: "Cefaleia leve",
              prescription: "Paracetamol, se dor ou febre",
              certificate: "n/h",
              forwarding: "n/h",
              medicalRelease: "Released",
              patient: {
                id: 1,
                name: "Sheldon Cooper",
                cpf: "316.094.990-77",
                nameMother: "Carla Cooper",
                nameFather: "Jose Cooper",
                genre: "Male",
                birth: "1995-02-01",
                streetName: "Rua Adolfo Konder",
                numberHome: 1253,
                district: "Centro",
                city: "Navegantes",
                state: "SC",
                country: "Brasil"
              },
              doctor: {
                id: 1,
                name: "Carla Maria Moraes",
                cpf: "528.220.220-46",
                nameMother: "Julia Moraes",
                nameFather: "Lucas Moraes",
                genre: "Female",
                birth: "1986-09-14",
                streetName: "Rua Conselheir",
                numberHome: 3476,
                district: "Rocio Fechado",
                city: "Londrina",
                state: "Parana",
                country: "Brasil",
                registerNumber: "62445561-0",
                registerState: "PR",
                specialty: "Obstetra"
              }
            },
          );
          return of(appointmentList);
        })
      )
      .subscribe((response) => {
        this.appointmentList = response;
      });
  }


}
