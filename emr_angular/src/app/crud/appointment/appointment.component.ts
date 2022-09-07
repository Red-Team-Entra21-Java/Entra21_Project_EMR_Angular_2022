import { Component, OnInit } from '@angular/core';
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
    private system: SystemService
  ) { }

  ngOnInit(): void {
    this.listar()
    this.enviarTitulo()
  }

  listar() {
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
    // this.patientList.appointment.splice(index,1)
  }

  enviarTitulo() {
    this.system.tituloAtual = "Atendimentos"
  }

}
