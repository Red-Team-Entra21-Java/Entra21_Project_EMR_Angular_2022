import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { PatientService } from 'src/app/services/crud/patient.service';
import { SecurityService } from 'src/app/services/security/security.service';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {

  genreBox: Array<String> = ["Female", "Male", "Other"]
  patient!: any;

  updateButtonHidden: boolean = this.patientService.updateButtonHidden;
  name!: string | null
  cpf!: string | null
  nameMother!: string | null
  nameFather!: string | null
  genre!: string | null
  birth!: Date | null
  streetName!: string | null
  numberHome!: Number | null
  district!: string | null
  city!: string | null
  state!: string | null
  country!: string | null

  constructor(
    private patientService: PatientService,
    private router: Router,
    private securityService: SecurityService,

  ) { }

  ngOnInit(): void {
    if(!this.patientService.updateButtonHidden) {
      this.patient = this.patientService.patient;
    } else {
      this.patient = {};
    }
  }

  isLogged() {
    if(this.securityService.authenticated === false) {
      this.router.navigateByUrl("")
    } else {
      this.router.navigateByUrl("patient")
    }
  }

  createPatient() {
    this.patientService
      .create(this.patient)
      .pipe(
        catchError((error) => {
          let patientList: Array<any> = new Array();
            patientList.push(
            {
              id: 3,
              name: "Joana da Silva",
              cpf: "776.939.100-85",
              nameMother: "Julia Garcia",
              nameFather: "Joao da Silva",
              genre: "Female",
              birth: "1985-06-13",
              streetName: "Rua 465",
              numberHome: 1268,
              district: "Numerais",
              city: "Imbituba",
              state: "Santa Catarina",
              country: "Brasil"
            }
          ); 
          this.router.navigateByUrl("patient")           
          return of(patientList);
        })
      )
      .subscribe((response: any) => {
        if (response) {          
          this.patientService.patientList.push(response);
        }
      });
      this.clearInputs();
      this.router.navigateByUrl("patient")
  }

  updatePatient(): void {
    this.patientService
      .update(this.patientService.patient)
      .pipe(
        catchError((error) => {
          this.patientService.patientList[this.patientService.patientList.indexOf(this.patientService.patient)] = this.patientService.patient;//VERIFICAR
          return of(error);
        })
      )
      .subscribe((response: any) => {
        if (response) {
          this.patientService.patientList[this.patientService.patientList.indexOf(this.patientService.patient)] = response;
        }
      });
      this.clearInputs()
      this.router.navigateByUrl("patient")
  }

  cancelRecord() {
    this.clearInputs()
    this.router.navigateByUrl("patient")
  }

  clearInputs() {
    this.name = ""
    this.cpf = ""
    this.nameMother = ""
    this.nameFather = ""
    this.genre = ""
    this.birth = new Date()
    this.streetName = ""
    this.numberHome = new Number()
    this.district = ""
    this.city = ""
    this.state = ""
    this.country = ""
  }

  onSubmit() {
    if(this.updateButtonHidden === true) {
      this.createPatient()
    } else {
      this.updatePatient()
    }
  }

  invalidMessage(variable: any): boolean {
    let validation: boolean
    if(!variable.valid && variable.touched) {
      validation = true;
    } else {
      validation = false;
    }
    return validation
  }
}
