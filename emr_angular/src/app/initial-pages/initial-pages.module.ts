import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsPagesComponent } from './forms-pages/forms-pages.component';
import { CrudModule } from '../crud/crud.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    FormsPagesComponent,
    
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
