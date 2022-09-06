import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  patientList!: Array<any>;       // OS DADOS VINDO DA API SÃO CARREGADOS AQUI 

  appointments: Array<any> = []



  constructor(
    private service: BackendService
  ) { }

  ngOnInit(): void {
    this.listar()
    setTimeout(() => {
      this.listAppointments()
    }, 100); //verificar
  }

  listar() {
    this.service.listPatient("texte")
      .pipe(
        catchError(
          (error) => {
            this.patientList = this.service.patients
            return of(this.patientList)
          }
        )
      )
      .subscribe((Response) => {
        console.log("Resultado:", Response);

      })
  }

  deleteAppointment(index: number) {
    // this.patientList.appointment.splice(index,1)
  }


  listAppointments() {
    let date
    let hour
    let patientCPF
    let patientName
    let doctorName

    for (let count = 0; count < this.patientList.length; count++) {
      for (let countAp = 0; countAp < this.patientList[count].appointments.length; countAp++) {
        date = this.patientList[count].appointments[countAp].date
        hour = this.patientList[count].appointments[countAp].hour
        patientCPF = this.patientList[count].cpf
        patientName = this.patientList[count].name
        doctorName = this.patientList[count].doctor

        this.appointments.push(
          {
            date: date,
            hour: hour,
            patientCPF: patientCPF,
            patientName: patientName,
            doctorName: doctorName
          }
        )
      }

    }
    console.log(this.appointments);


  }

}
