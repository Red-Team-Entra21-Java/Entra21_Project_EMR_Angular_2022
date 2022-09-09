import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/crud/appointment.service';
import { DoctorService } from 'src/app/services/crud/doctor.service';
import { PatientService } from 'src/app/services/crud/patient.service';
import { UserService } from 'src/app/services/crud/user.service';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  appointmentsNumber: number = this.appointmentService.appointments.length
  patientsNumber: number = this.patientService.patients.length
  doctorsNumber: number = this.doctorService.doctors.length
  usersNumber: number = this.userService.users.length

  constructor(
    private router: Router,
    private system: SystemService,
    private appointmentService: AppointmentService,
    private patientService: PatientService,
    private doctorService: DoctorService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.enviarTitulo()
  }

  enviarTitulo() {
    this.system.currentTitle = "Dashboard"
  }

}
