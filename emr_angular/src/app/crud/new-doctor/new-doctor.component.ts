import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { DoctorService } from 'src/app/services/crud/doctor.service';
import { SecurityService } from 'src/app/services/security/security.service';

@Component({
  selector: 'app-new-doctor',
  templateUrl: './new-doctor.component.html',
  styleUrls: ['./new-doctor.component.css']
})
export class NewDoctorComponent implements OnInit {

  genreBox: Array<String> = ["Female", "Male", "Other"]
  doctor!: any;

  updateButtonHidden: boolean = this.doctorService.updateButtonHidden;
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
  registerNumber!: string | null
  registerState!: string | null
  specialty!: string | null


  constructor(
    private doctorService: DoctorService,
    private router: Router,
    private securityService: SecurityService,

  ) { }

  ngOnInit(): void {
    if(!this.doctorService.updateButtonHidden) {
      this.doctor = this.doctorService.doctor;
    } else {
      this.doctor = {};
    }
  }

  //VERIDICAR
  isLogged() {
    if(this.securityService.authenticated === false) {
      this.router.navigateByUrl("")
    } else {
      this.router.navigateByUrl("doctor")
    }
  }

  createDoctor() {
    this.doctorService
      .create(this.doctor)
      .pipe(
        catchError((error) => {
          //this.doctorService.doctorList.push(this.doctor);   //VERIFICAR
          this.router.navigateByUrl("doctor")           
          return of( this.doctorService.doctorList);
        })
      )
      .subscribe((response: any) => {
        // console.log(response);
        if (response) {          
          this.doctorService.doctorList.push(response);
        }
      });
      this.clearInputs()
      this.router.navigateByUrl("doctor")
  }

  updateDoctor(): void {
    this.doctorService
      .update(this.doctorService.doctor)
      .pipe(
        catchError((error) => {
          this.doctorService.doctorList[this.doctorService.doctorList.indexOf(this.doctorService.doctor)] = this.doctorService.doctor;//VERIFICAR
          return of(error);
        })
      )
      .subscribe((response: any) => {
        // console.log(response);
        if (response) {
          this.doctorService.doctorList[this.doctorService.doctorList.indexOf(this.doctorService.doctor)] = response;
        }
      });
      this.clearInputs()
      this.router.navigateByUrl("doctor")
  }

  cancelRecord() {
    this.clearInputs()
    this.router.navigateByUrl("doctor")
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
    this.registerNumber = ""
    this.registerState = ""
    this.specialty = ""
  }
}