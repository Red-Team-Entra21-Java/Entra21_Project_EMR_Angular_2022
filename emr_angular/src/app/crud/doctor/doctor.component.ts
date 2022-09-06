import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  doctorList!: Array<any>;       // OS DADOS VINDO DA API SÃO CARREGADOS AQUI 

  constructor(
    private service: BackendService
  ) { }

  ngOnInit(): void {
    this.listar()
  }

  listar() {
    this.service.listDoctor("texte")
      .pipe(
        catchError(
          (error) => {
            this.doctorList = this.service.doctors
            return of(this.doctorList)
          }
        )
      )
      .subscribe((Response) => {
        console.log("Resultado:", Response);

      })
  }

  deleteDoctor(index: number) {
    this.doctorList.splice(index,1)
  }

}
