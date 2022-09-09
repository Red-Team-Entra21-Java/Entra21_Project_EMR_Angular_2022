import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { DoctorService } from 'src/app/services/crud/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  doctorList!: Array<any>;       // OS DADOS VINDO DA API SÃO CARREGADOS AQUI 

  constructor(
    private service: DoctorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.list()
  }

  list() {
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
        // console.log("Resultado:", Response);
      })
  }

  deleteDoctor(index: number) {
    this.doctorList.splice(index, 1)
  }

  sendData(index:number) {
    let name = this.doctorList[index].name
    let cpf = this.doctorList[index].cpf
    let motherName = this.doctorList[index].motherName
    let fatherName = this.doctorList[index].fatherName
    let genre = this.doctorList[index].genre
    let birthDate = this.doctorList[index].birthDate
    let streetName = this.doctorList[index].streetName
    let numberHome = this.doctorList[index].numberHome
    let district = this.doctorList[index].district
    let city = this.doctorList[index].city
    let state = this.doctorList[index].state
    let country = this.doctorList[index].country
    let registerNumber = this.doctorList[index].registerNumber
    let specialty = this.doctorList[index].specialty
    let numberAppointments = this.doctorList[index].numberAppointments
    console.log('doctor',name, cpf, motherName, fatherName, genre, birthDate, streetName, numberHome, district, city, state, country, registerNumber, specialty, numberAppointments);
    this.router.navigate(['new-doctor',name, cpf, motherName, fatherName, genre, birthDate, streetName, numberHome, district, city, state, country, registerNumber, specialty, numberAppointments]);
    this.service.updateButtonHidden = false
    this.service.indexUpdateDoctor = index;
  }

  newDoctor() {
    this.service.updateButtonHidden = true
  }

}
