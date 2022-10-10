import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { DoctorService } from 'src/app/services/crud/doctor.service';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  doctorIdSelected!: number;
  prefix!: string;

  constructor(
    public doctorService: DoctorService,
    private system: SystemService,
    private router: Router
  ) { }

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
              name: "Carla Maria Moraes",
              cpf: "528.220.220-46",
              nameMother: "Julia Moraes",
              nameFather: "Lucas Moraes",
              genre: "Female",
              birth: "1986-09-14",
              streetName: "Rua Conselheir",
              numberHome: 3476,
              district: "Rocio Fechado",
              city: "Londrina",
              state: "Parana",
              country: "Brasil",
              registerNumber: "62445561-0",
              registerState: "PR",
              specialty: "Obstetra"
            }
          ); 
          return of(doctorList);
        })
      )
      .subscribe((response) => {
        this.doctorService.doctorList = response;
      });
  }

  newDoctor(): void {
    this.doctorService.updateButtonHidden = true
  }

  updateDoctor(doctor: any): void {
    this.doctorService.updateButtonHidden = false
    this.doctorService
      .getById(doctor)
      .pipe(
        catchError((error) => {
          return of(false);
        })
      )
      .subscribe((response: any) => {
        this.doctorService.doctor = response;
        this.router.navigateByUrl("new-doctor")
      });
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
        if (response) {
          this.doctorService.doctorList.splice(this.doctorService.doctorList.indexOf(doctor), 1);
        }
      });
  }

  detailDoctor(doctor: any): void {
    this.doctorService
      .getById(doctor)
      .pipe(
        catchError((error) => {
          return of(false);
        })
      )
      .subscribe((response: any) => {
        this.doctorService.doctor = response;
        this.router.navigateByUrl("detail-doctor")
      });
  }

  findDoctor(prefix: string) {
    if (prefix === "") {
      this.listAllDoctor()
    } else {
      this.doctorService
        .startWith(prefix)
        .pipe(
          catchError((error) => {
            return of(false);
          })
        )
        .subscribe((response: any) => {
          this.doctorService.doctorList = response;
        });
    }
  }

  allowedUser(): boolean {
    if (this.system.userTypeLogged === 'Admin') {
      return true;
    } else {
      return false;
    }
  }

  saveDoctorId(doctorId: number) {
    this.doctorIdSelected = doctorId;
  }
}
