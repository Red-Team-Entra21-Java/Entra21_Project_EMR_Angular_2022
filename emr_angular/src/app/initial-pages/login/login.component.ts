import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private router: Router,
    private security: SecurityService,
    private service: SystemService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.security.authenticated = false;
  }

  login(): void {
    (<HTMLInputElement>document.getElementById('formLogin')).addEventListener('submit', (event) => {
      event.preventDefault()
      this.logar()


    });
    // this.security.authenticated = true;
    // this.router.navigateByUrl('dashboard')
    
  }

  recordUser(data: boolean) {

    switch (data) {
      case true:
        this.service.isLogin = true;
        break;
      case false:
        this.service.isLogin = false;
        break;
    
      default:
        this.service.isLogin = true;
        break;
    }
  }

  logar() {
    let login = (<HTMLInputElement>document.getElementById("userName")).value
    let password = (<HTMLInputElement>document.getElementById("password")).value

    for (let countLogin = 0; countLogin < this.userService.users.length; countLogin++) {
      if(login === this.userService.users[countLogin].login && password === this.userService.users[countLogin].password) {
        this.security.authenticated = true;
        this.router.navigateByUrl('dashboard')
      } else {
        this.erroMessage = false;
        
      }
      
    }

  }

}
