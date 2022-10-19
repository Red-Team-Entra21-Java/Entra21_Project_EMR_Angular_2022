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
import { DetailsPatientComponent } from './details-patient/details-patient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { DetailsDoctorComponent } from './details-doctor/details-doctor.component';
import { DetailsUserComponent } from './details-user/details-user.component';
import { DetailsAppointmentComponent } from './details-appointment/details-appointment.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PrescriptionComponent } from './printer/prescription/prescription.component';


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
    DetailsPatientComponent,
    DetailsDoctorComponent,
    DetailsUserComponent,
    DetailsAppointmentComponent,
    PrescriptionComponent,
    
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    NgApexchartsModule
  ],
  exports: [
    NewUserComponent
  ]
})
export class CrudModule { }
