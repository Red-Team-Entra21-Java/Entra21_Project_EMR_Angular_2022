import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from 'src/app/services/crud/appointment.service';
import { PatientService } from 'src/app/services/crud/patient.service';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent implements OnInit {

  updateButtonHidden: boolean = this.service.updateButtonHidden;
  date!: string | null
  hour!: string | null
  doctor!: string | null
  patient!: string | null
  patientCPF!: string | null
  anamnesis!: string | null
  prescription!: string | null
  certificate!: string | null
  forwarding!: string | null
  medicalRelease!: string | null

  patientList: Array<any> = this.servicePatient.patients

  constructor(
    private service: AppointmentService,
    private servicePatient: PatientService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.date = this.route.snapshot.paramMap.get("date")
    this.hour = this.route.snapshot.paramMap.get("hour")
    this.doctor = this.route.snapshot.paramMap.get("doctor")
    this.patient = this.route.snapshot.paramMap.get("patient")
    this.patientCPF = this.route.snapshot.paramMap.get("patientCPF")
    this.anamnesis = this.route.snapshot.paramMap.get("anamnesis")
    this.prescription = this.route.snapshot.paramMap.get("prescription")
    this.certificate = this.route.snapshot.paramMap.get("certificate")
    this.forwarding = this.route.snapshot.paramMap.get("forwarding")
    this.medicalRelease = this.route.snapshot.paramMap.get("medicalRelease")
  }

  saveAppointment() {
    (<HTMLInputElement>document.getElementById('formNewAppointment')).addEventListener('submit', (event) => {
      event.preventDefault()
      let data = this.getData()
      
      if (this.updateButtonHidden === true) {
        console.log("Salvando", data)
        this.service.appointments.push(data)
      } else {
        this.service.appointments[this.service.indexUpdateAppointment] = data
      }
    });
  }

  getData() {
    this.date = "12/12/2022"
    this.hour = "13:24"
    this.doctor = "Rafael"
    this.patient = "Sheldon"
    this.patientCPF = "123"
    this.anamnesis = (<HTMLInputElement>document.getElementById("medicalAnamnesisAppointment")).value
    this.prescription = (<HTMLInputElement>document.getElementById("medicalPrescriptionAppointment")).value
    this.certificate = (<HTMLInputElement>document.getElementById("medicalCertificateAppointment")).value
    this.forwarding = (<HTMLInputElement>document.getElementById("medicalForwardingAppointment")).value
    this.medicalRelease = (<HTMLInputElement>document.getElementById("medicalReleaseAppointment")).value

    return {
      date: this.date,
      hour: this.hour,
      doctor: this.doctor,
      patient: this.patient,
      patientCPF: this.patientCPF,
      anamnesis: this.anamnesis,
      prescription: this.prescription,
      certificate: this.certificate,
      forwarding: this.forwarding,
      medicalRelease: this.medicalRelease,
    }
  }
}
