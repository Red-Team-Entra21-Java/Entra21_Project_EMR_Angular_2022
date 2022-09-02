import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudModule } from './crud/crud.module';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "", component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),CrudModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
