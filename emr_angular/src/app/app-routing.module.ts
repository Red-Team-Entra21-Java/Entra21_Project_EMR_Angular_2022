import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './crud/appointment/appointment.component';
import { CrudModule } from './crud/crud.module';
import { DashboardComponent } from './crud/dashboard/dashboard.component';
import { DetailsPatientComponent } from './crud/details-patient/details-patient.component';
import { DoctorComponent } from './crud/doctor/doctor.component';
import { NewAppointmentComponent } from './crud/new-appointment/new-appointment.component';
import { NewDoctorComponent } from './crud/new-doctor/new-doctor.component';
import { NewPatientComponent } from './crud/new-patient/new-patient.component';
import { NewUserComponent } from './crud/new-user/new-user.component';
import { PatientComponent } from './crud/patient/patient.component';
import { UserComponent } from './crud/user/user.component';
import { FormsPagesComponent } from './initial-pages/forms-pages/forms-pages.component';
import { HomeComponent } from './initial-pages/home/home.component';
import { InitialPagesModule } from './initial-pages/initial-pages.module';
import { AppointmentReportComponent } from './report/appointment-report/appointment-report.component';
import { DoctorReportComponent } from './report/doctor-report/doctor-report.component';
import { PatientReportComponent } from './report/patient-report/patient-report.component';
import { UserReportComponent } from './report/user-report/user-report.component';
import { SecurityService } from './services/security/security.service';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "login", component: FormsPagesComponent},
  { path: "dashboard", component: DashboardComponent,canActivate: [SecurityService]},
  { path: "appointments", component: AppointmentComponent,canActivate: [SecurityService]},
  { path: "patient", component: PatientComponent,canActivate: [SecurityService]},
  { path: "doctor", component: DoctorComponent,canActivate: [SecurityService]},
  { path: "user", component: UserComponent},
  { path: "new-appointment", component: NewAppointmentComponent,canActivate: [SecurityService]},
  { path: "new-appointment/:date/:hour/:doctor/:patient/:patientCPF/:anamnesis/:prescription/:certificate/:forwarding/:medicalRelease", component: NewAppointmentComponent,canActivate: [SecurityService]},
  { path: "new-patient", component: NewPatientComponent,canActivate: [SecurityService]},
  { path: "new-patient/:name/:cpf/:motherName/:fatherName/:genre/:birthDate/:streetName/:numberHome/:district/:city/:state/:country", component: NewPatientComponent,canActivate: [SecurityService]},
  { path: "new-doctor", component: NewDoctorComponent,canActivate: [SecurityService]},
  { path: "new-doctor/:name/:cpf/:motherName/:fatherName/:genre/:birthDate/:streetName/:numberHome/:district/:city/:state/:country/:registerNumber/:specialty/:numberAppointments", component: NewDoctorComponent,canActivate: [SecurityService]},
  { path: "new-user", component: NewUserComponent},
  { path: "new-user/:name/:email/:login/:password", component: NewUserComponent},
  { path: "detail-patient", component: DetailsPatientComponent,canActivate: [SecurityService]},
  { path: "appointment-report", component: AppointmentReportComponent,canActivate: [SecurityService]},
  { path: "patient-report", component: PatientReportComponent,canActivate: [SecurityService]},
  { path: "doctor-report", component: DoctorReportComponent,canActivate: [SecurityService]},
  { path: "user-report", component: UserReportComponent,canActivate: [SecurityService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),CrudModule,InitialPagesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
