import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/crud/appointment.service';

@Component({
  selector: 'app-appointment-report',
  templateUrl: './appointment-report.component.html',
  styleUrls: ['./appointment-report.component.css']
})
export class AppointmentReportComponent implements OnInit {

  appointmentList!: Array<any>;

  constructor(
    private appointmentService: AppointmentService
  ) { }

  ngOnInit(): void {
    this.appointmentList = this.appointmentService.appointments
  }

}
