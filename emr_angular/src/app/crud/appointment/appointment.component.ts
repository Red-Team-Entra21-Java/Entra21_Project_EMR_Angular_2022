import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { AppointmentService } from 'src/app/services/crud/appointment.service';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointmenttList!: Array<any>;       // OS DADOS VINDO DA API SÃO CARREGADOS AQUI 

  constructor(
    private service: AppointmentService,
    private system: SystemService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.list()
    this.sendTitle()
  }

  list() {
    this.service.listAppointments("texte")
      .pipe(
        catchError(
          (error) => {
            this.appointmenttList = this.service.appointments
            return of(this.appointmenttList)
          }
        )
      )
      .subscribe((Response) => {
        console.log("Resultado:", Response);

      })
  }

  deleteAppointment(index: number) {
    this.appointmenttList.splice(index,1)
  }

  sendTitle() {
    this.system.currentTitle = "Appointments"
  }

  sendData(index:number) {
    let date = this.appointmenttList[index].date
    let hour = this.appointmenttList[index].hour
    let doctor = this.appointmenttList[index].doctor
    let patient = this.appointmenttList[index].patient
    let patientCPF = this.appointmenttList[index].patientCPF
    let anamnesis = this.appointmenttList[index].anamnesis
    let prescription = this.appointmenttList[index].prescription
    let certificate = this.appointmenttList[index].certificate
    let forwarding = this.appointmenttList[index].forwarding
    let medicalRelease = this.appointmenttList[index].medicalRelease
    
    console.log('new-appointment',date, hour, doctor, patient, patientCPF, anamnesis, prescription, certificate, forwarding, medicalRelease);
    this.router.navigate(['new-appointment',date, hour, doctor, patient, patientCPF, anamnesis, prescription, certificate, forwarding, medicalRelease]);
    this.service.updateButtonHidden = false
    this.service.indexUpdateAppointment = index;
    
  }

  newAppointment() {
    this.service.updateButtonHidden = true
  }

}
