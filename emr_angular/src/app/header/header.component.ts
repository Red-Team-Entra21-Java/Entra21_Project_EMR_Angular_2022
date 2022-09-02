import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private security: SecurityService
  ) { }

  ngOnInit(): void {
  }

  exit() {
    this.security.authenticated = false
    this.router.navigateByUrl("")
  }

  isAuthenticated(): boolean {
    if(this.security.authenticated) {
      return true;
    } else {
      return false
    }
  }

}
