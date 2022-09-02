import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private security: SecurityService
  ) { }

  ngOnInit(): void {
    this.security.authenticated = false;
  }

  login(): void {
    this.security.authenticated = true;
    this.router.navigateByUrl('dashboard')
  }

}
