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

    this.userService.listUser(this.getData())
      .pipe(
        catchError(
          (error) => {
            this.loginOffline()
            return of(error)
          }
        )
      )
      .subscribe((Response) => {
        console.log("Resultado:", Response);
        this.loginOnline(Response)
      })


  };

  getData(): any {

    return {
      login: this.login,
      password: this.password

    }
  }

  loginOnline(Response: any) {
    
    if (this.login === Response[0].login && this.password === Response[0].password) {
      this.security.authenticated = true;
      this.service.userLogged = Response[0].name
      this.router.navigateByUrl('dashboard')
    } else {
      this.erroMessage = false;
    }

  }

  loginOffline() {
    this.userService.users.push(
      {
        login: "baseteste",
        name: "Testador",
        password: "teste",
        email: "teste@teste.com"
      }
    )
    for (let countLogin = 0; countLogin < this.userService.users.length; countLogin++) {
      if (this.login === this.userService.users[countLogin].login && this.password === this.userService.users[countLogin].password) {
        this.security.authenticated = true;
        this.service.userLogged = this.userService.users[countLogin].name
        this.router.navigateByUrl('dashboard')
      }else {
        this.erroMessage = false;
      }
    }
  }

}