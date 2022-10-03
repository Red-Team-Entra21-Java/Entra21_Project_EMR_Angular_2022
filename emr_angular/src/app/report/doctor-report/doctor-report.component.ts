import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/crud/doctor.service';

@Component({
  selector: 'app-doctor-report',
  templateUrl: './doctor-report.component.html',
  styleUrls: ['./doctor-report.component.css']
})
export class DoctorReportComponent implements OnInit {

  doctorList!: Array<any>;

  constructor(
    private doctorService: DoctorService
  ) { }

  ngOnInit(): void {
    this.doctorList = this.doctorService.doctorList
  }

}
