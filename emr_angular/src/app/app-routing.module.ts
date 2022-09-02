import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './crud/appointment/appointment.component';
import { CrudModule } from './crud/crud.module';
import { DashboardComponent } from './crud/dashboard/dashboard.component';
import { DoctorComponent } from './crud/doctor/doctor.component';
import { NewAppointmentComponent } from './crud/new-appointment/new-appointment.component';
import { NewDoctorComponent } from './crud/new-doctor/new-doctor.component';
import { NewPatientComponent } from './crud/new-patient/new-patient.component';
import { NewUserComponent } from './crud/new-user/new-user.component';
import { PatientComponent } from './crud/patient/patient.component';
import { UserComponent } from './crud/user/user.component';
import { LoginComponent } from './login/login.component';
import { SecurityService } from './security.service';

const routes: Routes = [
  { path: "", component: LoginComponent},
  { path: "dashboard", component: DashboardComponent,canActivate: [SecurityService]},
  { path: "appointments", component: AppointmentComponent,canActivate: [SecurityService]},
  { path: "new-appointment", component: NewAppointmentComponent,canActivate: [SecurityService]},
  { path: "doctor", component: DoctorComponent,canActivate: [SecurityService]},
  { path: "new-doctor", component: NewDoctorComponent,canActivate: [SecurityService]},
  { path: "patient", component: PatientComponent,canActivate: [SecurityService]},
  { path: "new-patient", component: NewPatientComponent,canActivate: [SecurityService]},
  { path: "user", component: UserComponent,canActivate: [SecurityService]},
  { path: "new-user", component: NewUserComponent,canActivate: [SecurityService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),CrudModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
