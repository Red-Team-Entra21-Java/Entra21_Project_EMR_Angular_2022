import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/crud/patient.service';

@Component({
  selector: 'app-patient-report',
  templateUrl: './patient-report.component.html',
  styleUrls: ['./patient-report.component.css']
})
export class PatientReportComponent implements OnInit {

  patientList!: Array<any>;


  constructor(
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
    this.patientList = this.patientService.patientList
  }

}
