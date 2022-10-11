import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/crud/doctor.service';

@Component({
  selector: 'app-details-doctor',
  templateUrl: './details-doctor.component.html',
  styleUrls: ['./details-doctor.component.css']
})
export class DetailsDoctorComponent implements OnInit {

  doctor!: any;

  constructor(
    private doctorService: DoctorService
  ) { }

  ngOnInit(): void {
    this.doctor = this.doctorService.doctor;
  }

}