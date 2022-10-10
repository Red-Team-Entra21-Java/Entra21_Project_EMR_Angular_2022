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
  patientIdSelected!: number;
  prefix!: string;

  constructor(
    public patientService: PatientService,
    private systemService: SystemService,
    private router: Router
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.listAllPatient();
    }, 1000);
    this.sendTitle()
  }

  listAllPatient(): void {
    this.patientService
      .getAll()
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
          return of(patientList);
        })
      )
      .subscribe((response) => {
        this.patientService.patientList = response;
      });
  }

  newPatient(): void {
    this.patientService.updateButtonHidden = true
  }

  updatePatient(patient: any):void {
    this.patientService.updateButtonHidden = false
    this.patientService
    .getById(patient)
    .pipe(
      catchError((error) => {
        return of(false);
      })
      )
      .subscribe((response: any) => {
        this.patientService.patient = response;
        this.router.navigateByUrl("new-patient")
      });
  }

  deletePatient(patient: any): void {
    this.patientService
      .delete(patient)
      .pipe(
        catchError((error) => {
          return of(false);
        })
      )
      .subscribe((response: any) => {
        if (response) {
          this.patientService.patientList.splice(this.patientService.patientList.indexOf(patient), 1);
        }
      });
  }

  detailPatient(patient: any):void {
    this.patientService
    .getById(patient)
    .pipe(
      catchError((error) => {
        return of(false);
      })
      )
      .subscribe((response: any) => {
        this.patientService.patient = response;
        this.router.navigateByUrl("detail-patient")
      });
  }
  
  findPatient(prefix: string) {
    if(prefix === "" ) {
      this.listAllPatient()
    } else {
      this.patientService
      .startWith(prefix)
      .pipe(
        catchError((error) => {
          return of(false);
        })
        )
        .subscribe((response: any) => {
          this.patientService.patientList = response;
        });
    }
  }

  sendTitle() {
    this.systemService.currentTitle = "Records"
  }

  savePatientId(patientId: number) {
    this.patientIdSelected = patientId;
  }

  allowedUser(): boolean {
    if(this.systemService.userTypeLogged === 'Doctor' || this.systemService.userTypeLogged === 'Admin' ) {
      return true;
    } else {
      return false;
    }
  }
}
