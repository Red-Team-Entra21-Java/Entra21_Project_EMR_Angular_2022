import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { UserService } from 'src/app/services/crud/user.service';
import { SecurityService } from 'src/app/services/security/security.service';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  erroMessage: boolean = true;
  login!: string;
  password!: string;

  constructor(
    private router: Router,
    private security: SecurityService,
    private service: SystemService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.security.authenticated = false;
  }

  validateLogin(): void {
    this.userService
    .getAll()
    .pipe(
      catchError((error) => {
        let userList: Array<any> = new Array();
        userList.push({ id: 1, name: 'Administrator', login: "admin", email:"admin@emr.com", password: "admin" });
        userList.push({ id: 2, name: 'Doctor', login: "doctor", email:"doctor@emr.com", password: "doctor" });
        userList.push({ id: 3, name: 'User', login: "user", email:"user@emr.com", password: "user" });
        return of(userList);
      })
    )
    .subscribe((response) => {
      console.log(response);
      this.userService.userList = response;
      this.verifyLogin(response)
    });
  };

  verifyLogin(response: any) {
    for (let countLogin = 0; countLogin < response.length; countLogin++) {
      if (this.login === response[countLogin].login && this.password === response[countLogin].password) {
        this.security.authenticated = true;
        this.service.userLogged = response[countLogin].name
        this.router.navigateByUrl('dashboard')        
      }else {
        this.erroMessage = false;        
      }
    }
  }

  recordUser() {
    this.service.isLogin = false;
  }
}

