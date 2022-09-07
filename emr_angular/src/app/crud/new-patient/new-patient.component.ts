import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services/crud/patient.service';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {

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

  constructor(
    private service: PatientService,
    private route: ActivatedRoute
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
  }
  savePatient() {
    (<HTMLInputElement>document.getElementById('formNewPatient')).addEventListener('submit', (event) => {
      event.preventDefault()
      let data = this.getData()
      
      if (this.updateButtonHidden === true) {
        console.log("Salvando", data)
        this.service.patients.push(data)
      } else {
        this.service.patients[this.service.indexUpdatePatient] = data
      }
    });
  }


  getData() {
    this.name = (<HTMLInputElement>document.getElementById("patientName")).value
    this.cpf = (<HTMLInputElement>document.getElementById("patientCPF")).value
    this.motherName = (<HTMLInputElement>document.getElementById("patientMotherName")).value
    this.fatherName = (<HTMLInputElement>document.getElementById("patientFatherName")).value
    this.genre = (<HTMLInputElement>document.querySelector('input[name="genre"]:checked')).value
    this.birthDate = (<HTMLInputElement>document.getElementById("birthDate")).value
    this.streetName = (<HTMLInputElement>document.getElementById("patientStreet")).value
    this.numberHome = (<HTMLInputElement>document.getElementById("patientHomeNumber")).value
    this.district = (<HTMLInputElement>document.getElementById("patientDistrict")).value
    this.city = (<HTMLInputElement>document.getElementById("patientCity")).value
    this.state = (<HTMLInputElement>document.getElementById("patientState")).value
    this.country = (<HTMLInputElement>document.getElementById("patientCountry")).value

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
    }
  }

}
