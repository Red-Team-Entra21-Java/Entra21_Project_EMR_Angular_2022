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
            return of(error)
          }
        )
      )
      .subscribe((Response) => {
        console.log("Resultado:", Response);
        if (this.login === Response[0].login && this.password === Response[0].senha) {
              this.security.authenticated = true;
              this.service.userLogged = Response[0].name
              this.router.navigateByUrl('dashboard')
            } else {
              this.erroMessage = false;
            }
      })


    };

    getData():any {
      
      return {
        login: this.login,
        senha: this.password
      }
    }

  }

