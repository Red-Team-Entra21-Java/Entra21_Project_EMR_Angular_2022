import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/crud/appointment.service';

@Component({
  selector: 'app-details-appointment',
  templateUrl: './details-appointment.component.html',
  styleUrls: ['./details-appointment.component.css']
})
export class DetailsAppointmentComponent implements OnInit {

  appointment!: any;

  constructor(
    public appointmentervice: AppointmentService
  ) { }

  ngOnInit(): void {
    this.appointment = this.appointmentervice.appointment;
  }

}
