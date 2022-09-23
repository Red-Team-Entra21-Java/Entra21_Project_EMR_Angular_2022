import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/crud/appointment.service';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-appointment-report',
  templateUrl: './appointment-report.component.html',
  styleUrls: ['./appointment-report.component.css']
})
export class AppointmentReportComponent implements OnInit {

  appointmentList!: Array<any>;

  constructor(
    private appointmentService: AppointmentService,
    private system: SystemService,

  ) { }

  ngOnInit(): void {
    this.appointmentList = this.appointmentService.appointmentList
    this.sendTitle()
  }

  sendTitle() {
    this.system.currentTitle = "Reports"
  }
}
