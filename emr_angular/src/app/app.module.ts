import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudModule } from './crud/crud.module';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { InitialPagesModule } from './initial-pages/initial-pages.module';
import { SystemService } from './services/system.service';
import { PatientReportComponent } from './report/patient-report/patient-report.component';
import { AppointmentReportComponent } from './report/appointment-report/appointment-report.component';
import { DoctorReportComponent } from './report/doctor-report/doctor-report.component';
import { UserReportComponent } from './report/user-report/user-report.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    PatientReportComponent,
    AppointmentReportComponent,
    DoctorReportComponent,
    UserReportComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CrudModule,
    InitialPagesModule
  ],
  providers: [SystemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
