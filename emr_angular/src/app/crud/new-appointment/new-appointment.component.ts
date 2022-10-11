import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { AppointmentService } from 'src/app/services/crud/appointment.service';
import { PatientService } from 'src/app/services/crud/patient.service';
import { SecurityService } from 'src/app/services/security/security.service';
import { SystemService } from 'src/app/services/system.service';

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
  doctorId: number | null = (this.systemService.user[0].doctor !== null) ? this.systemService.user[0].doctor.id  : 1
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
    private securityService: SecurityService,
    private systemService: SystemService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    if (!this.appointmentService.updateButtonHidden) {
      this.appointment = this.appointmentService.appointment;
    } else {
      this.appointment = {};
    }
  }

  isLogged() {
    if (this.securityService.authenticated === false) {
      this.router.navigateByUrl("")
    } else {
      this.router.navigateByUrl("appointments")
    }
  }

  createAppointment() {
    this.appointment.doctor = { id: this.doctorId }
    this.appointment.patient = { id: this.patientId }
    this.appointmentService
      .create(this.appointment)
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
          this.router.navigateByUrl("appointments")
          return of(appointmentList);
        })
      )
      .subscribe((response: any) => {
        this.appointmentService.appointmentList.push(response);
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

  onSubmit() {
    if (this.updateButtonHidden === true) {
      this.createAppointment()
    } else {
      this.updateAppointment()
    }
  }

  invalidMessage(variable: any): boolean {
    let validation: boolean
    if (!variable.valid && variable.touched) {
      validation = true;
    } else {
      validation = false;
    }
    return validation
  }

}
