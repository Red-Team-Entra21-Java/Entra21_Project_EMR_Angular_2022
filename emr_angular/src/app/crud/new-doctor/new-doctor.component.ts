import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from 'src/app/services/crud/doctor.service';

@Component({
  selector: 'app-new-doctor',
  templateUrl: './new-doctor.component.html',
  styleUrls: ['./new-doctor.component.css']
})
export class NewDoctorComponent implements OnInit {

  updateButtonHidden: boolean = this.service.updateButtonHidden;
  name!: string | null
  cpf!: string | null
  motherName!: string | null
  fatherName!: string | null
  genre!: string | null
  birthDate!: string | null
  streetName!: string | null
  numberHome!: string | null
  district!: string | null
  city!: string | null
  state!: string | null
  country!: string | null
  registerNumber!: string | null
  specialty!: string | null
  numberAppointments!: string | null

  constructor(
    private service: DoctorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get("name")
    this.cpf = this.route.snapshot.paramMap.get("cpf")
    this.motherName = this.route.snapshot.paramMap.get("motherName")
    this.fatherName = this.route.snapshot.paramMap.get("fatherName")   
    this.genre = this.route.snapshot.paramMap.get("genre")
    this.birthDate = this.route.snapshot.paramMap.get("birthDate")
    this.streetName = this.route.snapshot.paramMap.get("streetName")
    this.numberHome = this.route.snapshot.paramMap.get("numberHome")
    this.district = this.route.snapshot.paramMap.get("district")
    this.city = this.route.snapshot.paramMap.get("city")
    this.state = this.route.snapshot.paramMap.get("state")
    this.country = this.route.snapshot.paramMap.get("country")
    this.registerNumber = this.route.snapshot.paramMap.get("registerNumber")
    this.specialty = this.route.snapshot.paramMap.get("specialty")
    this.numberAppointments = this.route.snapshot.paramMap.get("numberAppointments")
  }
  saveDoctor() {
    (<HTMLInputElement>document.getElementById('formNewDoctor')).addEventListener('submit', (event) => {
      event.preventDefault()
      let data = this.getData()
      if (this.updateButtonHidden === true) {
        console.log("Salvando", data)
        this.service.doctors.push(data)
      } else {
        this.service.doctors[this.service.indexUpdateDoctor] = data
      }
      this.router.navigateByUrl("doctor")
    });
  }

  getData() {
    this.name = (<HTMLInputElement>document.getElementById("doctorName")).value
    this.cpf = (<HTMLInputElement>document.getElementById("doctorCPF")).value
    this.motherName = (<HTMLInputElement>document.getElementById("doctorMotherName")).value
    this.fatherName = (<HTMLInputElement>document.getElementById("doctorFatherName")).value
    this.genre = (<HTMLInputElement>document.querySelector('input[name="genreDoctor"]:checked')).value
    this.birthDate = (<HTMLInputElement>document.getElementById("doctorBirthDate")).value
    this.streetName = (<HTMLInputElement>document.getElementById("doctorStreet")).value
    this.numberHome = (<HTMLInputElement>document.getElementById("doctorHomeNumber")).value
    this.district = (<HTMLInputElement>document.getElementById("doctorDistrict")).value
    this.city = (<HTMLInputElement>document.getElementById("doctorCity")).value
    this.state = (<HTMLInputElement>document.getElementById("doctorState")).value
    this.country = (<HTMLInputElement>document.getElementById("doctorCountry")).value
    this.registerNumber = (<HTMLInputElement>document.getElementById("doctorRegisterNumber")).value
    this.specialty = (<HTMLInputElement>document.getElementById("doctorSpecialty")).value
    this.numberAppointments = ""

    return {
      name: this.name,
      cpf: this.cpf,
      motherName: this.motherName,
      fatherName: this.fatherName,
      genre: this.genre,
      birthDate: this.birthDate,
      streetName: this.streetName,
      numberHome: this.numberHome,
      district: this.district,
      city: this.city,
      state: this.state,
      country: this.country,
      registerNumber: this.registerNumber,
      specialty: this.specialty,
      numberAppointments: this.numberAppointments
    }
  }

  cancelRecord() {
    this.router.navigateByUrl("doctor")
  }
}
