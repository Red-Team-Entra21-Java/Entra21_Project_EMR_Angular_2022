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
    setTimeout(() => {
      this.listAllAppointmentResume();
    }, 1000);
    this.sendTitle();
    // this.listAppointmentTable()

  }

  listAllAppointmentResume(): void {
    this.appointmentService
      .getAllResume()
      .pipe(
        catchError((error) => {
          let appointmentList: Array<any> = new Array();
          appointmentList.push(
            { 	
              id: 1,
              date: "02/10/2022 19:13",
              patientName: "Emerson Seiler",
              patientCpf: "316.094.990-77",
              doctorName: "Carla Maria Moraes"
            }
          );
          appointmentList.push(
            { 	
              id: 2,
              date: "02/10/2022 19:13",
              patientName: "Silvana Github",
              patientCpf: "763.323.270-65",
              doctorName: "Rafael da Silva"
            }
          );
          return of(appointmentList);
        })
      )
      .subscribe((response) => {
        this.appointmentService.appointmentList = response;
      });
  }


  listAllAppointment(): void {
    this.appointmentService
      .getAll()
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
        this.appointmentService.appointmentList = response;
      });
  }

  newAppointment(): void {
    this.appointmentService.updateButtonHidden = true
  }

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
