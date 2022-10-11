import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { catchError, of } from 'rxjs';
import { DoctorService } from 'src/app/services/crud/doctor.service';
import { UserService } from 'src/app/services/crud/user.service';
import { SecurityService } from 'src/app/services/security/security.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  user!: any;
  userTypeBox: Array<String> = ["Admin", "Doctor", "User"]

  updateButtonHidden: boolean = this.userService.updateButtonHidden;
  name!: string | null
  email!: string | null
  login!: string | null
  password!: string | null
  type!: string | null
  doctor!: any | null
  doctorId!: number | null

  constructor(
    private userService: UserService,
    public doctorService: DoctorService,
    private router: Router,
    public securityService: SecurityService,

  ) { }

  ngOnInit(): void {
    if(!this.userService.updateButtonHidden) {
      this.user = this.userService.user;
    } else {
      this.user = {};
    }    
  }

  //VERIDICAR
  isLogged() {
    if(this.securityService.authenticated === false) {
      this.router.navigateByUrl("")
    } else {
      this.router.navigateByUrl("user")
    }
  }

  createUser() {
    if(this.user.doctor !== null) {
      this.user.doctor = {id: this.doctorId}
    }
    if(!this.user.type) {
      this.user.type = this.userTypeBox[2]
    }
    this.userService
      .create(this.user)
      .pipe(
        catchError((error) => {
          let userList: Array<any> = new Array();
          userList.push(
            {
              id: 3,
              name: "Emerson Seiler",
              login: "admin",
              email: "seiler@emr.com",
              password: "admin",
              type: "Admin",
              doctor: null
            }
          );
          this.router.navigateByUrl("user")           
          return of(userList);
        })
      )
      .subscribe((response: any) => {
        if (this.securityService.authenticated === true) {          
          this.userService.userList.push(response);
        }
      });
      this.clearInputs()
      this.router.navigateByUrl("user")
  }

  updateUser(): void {
    if(this.user.doctor !== null) {
      this.user.doctor = {id: this.doctorId}
    }
    this.userService
      .update(this.userService.user)
      .pipe(
        catchError((error) => {
          return of(false);
        })
      )
      .subscribe((response: any) => {
        // console.log(response);
          this.userService.userList[this.userService.userList.indexOf(this.userService.user)] = response;
      });   
      this.clearInputs()
      this.router.navigateByUrl("user")
  }

  cancelRecord() {
    this.clearInputs()
    this.router.navigateByUrl("user")
  }

  clearInputs() {
    this.name = ""
    this.email = ""
    this.login = ""
    this.password = ""
  }

  onSubmit() {
    if(this.updateButtonHidden === true) {
      this.createUser()
    } else {
      this.updateUser()
    }
  }

  setDoctor(doctorId: any) {
    this.doctorId = doctorId   
  }

  invalidMessage(variable: any): boolean {
    let validation: boolean
    if(!variable.valid && variable.touched) {
      validation = true;
    } else {
      validation = false;
    }
    return validation
  }
}
