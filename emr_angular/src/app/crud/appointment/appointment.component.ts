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
  
  localAppointmentList: Array<any> = [];
  appointmenttList!: Array<any>;       // OS DADOS VINDO DA API SÃO CARREGADOS AQUI 

  constructor(
    public appointmentService: AppointmentService,
    public patientService: PatientService,
    public doctorService: DoctorService,
    private system: SystemService
  ) { }


  ngOnInit(): void {
    this.listAllAppointment();
    this.sendTitle();
    // this.listAppointmentTable()
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

  updateAppointment(appointment: any): void {
    this.appointmentService.updateButtonHidden = false
    this.appointmentService.appointment = appointment;
    console.log(appointment);
    
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

  sendTitle() {
    this.system.currentTitle = "Appointments"
  }

  getPatientName(index: number) {
    let patientName;

    for (let count = 0; count < this.patientService.patientList.length; count++) {
      if (index === this.patientService.patientList[count].id) {
        patientName = this.patientService.patientList[count].name
      }
    }
    return patientName
  }

  getPatientCpf(index: number) {
    let patientCpf;

    for (let count = 0; count < this.patientService.patientList.length; count++) {
      if (index === this.patientService.patientList[count].id) {
        patientCpf = this.patientService.patientList[count].cpf
      }
    }
    return patientCpf
  }

  getDoctorName(index: number) {
    let doctorName;

    for (let count = 0; count < this.doctorService.doctorList.length; count++) {
      if (index === this.doctorService.doctorList[count].id) {
        doctorName = this.doctorService.doctorList[count].name
      }
    }
    return doctorName
  }

  // listAppointmentTable() {
  //   this.listAllAppointment();
  //   for (let count = 0; count < this.appointmentService.appointmentList.length; count++) {
  //     for (let countPatient = 0; countPatient < this.patientService.patientList.length; countPatient++) {
  //       if (this.appointmentService.appointmentList[count].patient_id === this.patientService.patientList[countPatient].id) {
  //         for (let countDoctor = 0; countDoctor < this.doctorService.doctorList.length; countDoctor++) {
  //           if (this.appointmentService.appointmentList[count].doctor_id === this.doctorService.doctorList[countDoctor].id) {
  //             this.localAppointmentList.push(
  //               {
  //                 id: this.appointmentService.appointmentList[count].id,
  //                 patientName: this.patientService.patientList[countPatient].name,
  //                 patientCpf: this.patientService.patientList[countPatient].cpf,
  //                 doctorName: this.doctorService.doctorList[countDoctor].name,
  //                 anamnesis: this.appointmentService.appointmentList[count].anamnesis,
  //                 prescription: this.appointmentService.appointmentList[count].prescription,
  //                 certificate: this.appointmentService.appointmentList[count].certificate,
  //                 forwarding: this.appointmentService.appointmentList[count].forwarding,
  //                 medicalRelease: this.appointmentService.appointmentList[count].medicalRelease,
  //                 date: this.appointmentService.appointmentList[count].date_open,
  //               }
  //             )
  //           } 
  //         }
  //       }
  //     }      
  //   }
  //   console.log(this.localAppointmentList);
  // }

}
