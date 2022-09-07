import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { PatientService } from 'src/app/services/crud/patient.service';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {


patientList!: Array<any>;       // OS DADOS VINDO DA API SÃO CARREGADOS AQUI 

  constructor(
    private service: PatientService,
    private system: SystemService
  ) { }

  ngOnInit(): void {
    this.listar()
    this.sendTitle()
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

  deletePatient(index: number) {
    this.patientList.splice(index,1)
  }

  sendTitle() {
    this.system.currentTitle = "Records"
  }

}
