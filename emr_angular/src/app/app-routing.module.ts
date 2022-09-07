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
import { HomeComponent } from './initial-pages/home/home.component';
import { InitialPagesModule } from './initial-pages/initial-pages.module';
import { LoginComponent } from './initial-pages/login/login.component';
import { NewUserIndexComponent } from './initial-pages/new-user-index/new-user-index.component';
import { SecurityService } from './services/security/security.service';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "login", component: LoginComponent},
  { path: "dashboard/:title", component: DashboardComponent,canActivate: [SecurityService]},
  { path: "appointments", component: AppointmentComponent,canActivate: [SecurityService]},
  { path: "patient", component: PatientComponent,canActivate: [SecurityService]},
  { path: "doctor", component: DoctorComponent,canActivate: [SecurityService]},
  { path: "user", component: UserComponent,canActivate: [SecurityService]},
  { path: "new-appointment", component: NewAppointmentComponent},
  { path: "new-patient", component: NewPatientComponent},
  { path: "new-doctor", component: NewDoctorComponent},
  { path: "new-user", component: NewUserComponent},
  { path: "new-user-index", component: NewUserIndexComponent},
  { path: "detail-patient", component: DetailsPatientComponent,canActivate: [SecurityService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),CrudModule,InitialPagesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
