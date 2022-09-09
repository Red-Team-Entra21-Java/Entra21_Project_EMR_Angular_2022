import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private system: SystemService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.list()
    this.sendTitle()
  }

  list() {
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
        // console.log("Resultado:", Response);
      })
  }

  deletePatient(index: number) {
    this.patientList.splice(index, 1)
  }

  sendTitle() {
    this.system.currentTitle = "Records"
  }

  sendData(index:number) {
    let name = this.patientList[index].name
    let cpf = this.patientList[index].cpf
    let motherName = this.patientList[index].motherName
    let fatherName = this.patientList[index].fatherName
    let genre = this.patientList[index].genre
    let birthDate = this.patientList[index].birthDate
    let streetName = this.patientList[index].streetName
    let numberHome = this.patientList[index].numberHome
    let district = this.patientList[index].district
    let city = this.patientList[index].city
    let state = this.patientList[index].state
    let country = this.patientList[index].country
    console.log('new-patient',name, cpf, motherName, fatherName, genre, birthDate, streetName, numberHome, district, city, state, country);
    console.log('fatherName',fatherName);
    this.router.navigate(['new-patient',name, cpf, motherName, fatherName, genre, birthDate, streetName, numberHome, district, city, state, country]);
    this.service.updateButtonHidden = false
    this.service.indexUpdatePatient = index;
  }

  newPatient() {
    this.service.updateButtonHidden = true
  }

}
