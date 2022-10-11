import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsPagesComponent } from './forms-pages/forms-pages.component';
import { CrudModule } from '../crud/crud.module';
import { FormsModule } from '@angular/forms';
import { TeamComponent } from './team/team.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    FormsPagesComponent,
    TeamComponent,
    RegisterComponent,
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    CrudModule,
    FormsModule
  ]
})
export class InitialPagesModule { }
