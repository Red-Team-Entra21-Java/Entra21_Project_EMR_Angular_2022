import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { DoctorComponent } from './doctor/doctor.component';
import { NewDoctorComponent } from './new-doctor/new-doctor.component';
import { PatientComponent } from './patient/patient.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UserComponent } from './user/user.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashboardComponent,
    AppointmentComponent,
    NewAppointmentComponent,
    DoctorComponent,
    NewDoctorComponent,
    PatientComponent,
    NewPatientComponent,
    NewUserComponent,
    UserComponent,
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class CrudModule { }
