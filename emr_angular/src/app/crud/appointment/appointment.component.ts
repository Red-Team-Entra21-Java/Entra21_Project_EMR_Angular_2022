import { Component, OnInit } from '@angular/core';
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

  appointmenttList!: Array<any>;       // OS DADOS VINDO DA API SÃO CARREGADOS AQUI 
  // patientList!: Array<any>;
  constructor(
    public appointmentService: AppointmentService,
    public patientService: PatientService,
    public doctorService: DoctorService,
    private system: SystemService
  ) { }

  ngOnInit(): void {
    // this.patientList = this.patientService.patientList
    this.listAllAppointment();
    // console.log(this.patientList);
    
  }

  listAllAppointment(): void {
    this.appointmentService
      .getAll()
      .pipe(
        catchError((error) => {
          let appointmentList: Array<any> = new Array();
          appointmentList.push({ 	id: 1, patient_id: 1, doctor_id: 1, date: "30/01/2020 22:34", anamnesis: "Dor de cabeça", prescription: "Paracetamol 8/8h", certificate: "atestado 15 dias", forwarding: "n/h", medicalRelease: "liberado" });
          return of(appointmentList);
        })
      )
      .subscribe((response) => {
        console.log(response);
        this.appointmentService.appointmentList = response;
      });
  }

  newAppointment(): void {
    this.appointmentService.updateButtonHidden = true
  }

  updateAppointment(appointment: any): void {
    this.appointmentService.updateButtonHidden = false
    this.appointmentService.appointment = appointment;
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
        console.log(response);
        if (response) {
          this.appointmentService.appointmentList.splice(this.appointmentService.appointmentList.indexOf(appointment), 1);
        }
      });
  }

  sendTitle() {
    this.system.currentTitle = "Appointments"
  }


}
