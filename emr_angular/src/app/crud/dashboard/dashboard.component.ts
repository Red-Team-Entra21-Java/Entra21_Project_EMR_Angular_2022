import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/crud/appointment.service';
import { DoctorService } from 'src/app/services/crud/doctor.service';
import { PatientService } from 'src/app/services/crud/patient.service';
import { UserService } from 'src/app/services/crud/user.service';
import { SystemService } from 'src/app/services/system.service';
import { DoctorComponent } from '../doctor/doctor.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  appointmentsNumber!: number
  patientsNumber!: number
  doctorsNumber!: number
  usersNumber!: number

  constructor(
    private router: Router,
    private systemService: SystemService,
    private appointmentService: AppointmentService,
    private patientService: PatientService,
    private doctorService: DoctorService,
    private userService: UserService,

  ) { }

  ngOnInit(): void {
    this.enviarTitulo()
    this.doctorsNumber 

      this.systemService.listAllAppointment()
      this.systemService.listAllDoctor()
      this.systemService.listAllPatient()
      this.systemService.listAllUser()
      this.populateDashboard()

  }

  enviarTitulo() {
    this.systemService.currentTitle = "Dashboard"
  }

  populateDashboard() {
    setTimeout(() => {
      this.appointmentsNumber = this.appointmentService.appointmentList.length
      this.patientsNumber = this.patientService.patientList.length
      this.doctorsNumber = this.doctorService.doctorList.length
      this.usersNumber = this.userService.userList.length
    }, 1000);
  }

}
