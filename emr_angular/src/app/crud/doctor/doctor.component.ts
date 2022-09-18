import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { DoctorService } from 'src/app/services/crud/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  

  constructor(public doctorService: DoctorService) { }

  ngOnInit(): void {
    this.listAllDoctor();
  }

  listAllDoctor(): void {
    this.doctorService
      .getAll()
      .pipe(
        catchError((error) => {
          let doctorList: Array<any> = new Array();
          doctorList.push(
            { 
              id: 1,
              name: 'Doctor Teste',
              cpf: "1234",
              nameMother: "Mother Teste",
              nameFather: "Father Teste",
              genre: "female",
              birth: 1985-12-30,
              streetName: "Street Teste",
              numberHome: 145,
              district: "Center",
              city: "Teste",
              state: "CA",
              country: "Brazil"
            }
          );

          
          return of(doctorList);
        })
      )
      .subscribe((response) => {
        console.log(response);
        this.doctorService.doctorList = response;
      });
  }

  newDoctor(): void {
    this.doctorService.updateButtonHidden = true
  }

  updateDoctor(doctor: any): void {
    this.doctorService.updateButtonHidden = false
    this.doctorService.doctor = doctor;
  }
  
  deleteDoctor(doctor: any): void {
    this.doctorService
      .delete(doctor)
      .pipe(
        catchError((error) => {
          return of(false);
        })
      )
      .subscribe((response: any) => {
        console.log(response);
        if (response) {
          this.doctorService.doctorList.splice(this.doctorService.doctorList.indexOf(doctor), 1);
        }
      });
  }

}
