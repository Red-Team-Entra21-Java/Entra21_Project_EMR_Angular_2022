import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-forms-pages',
  templateUrl: './forms-pages.component.html',
  styleUrls: ['./forms-pages.component.css']
})
export class FormsPagesComponent implements OnInit {

  isLogin: boolean = this.service.isLogin;

  constructor(
    private service: SystemService,
    public route: Router
  ) { }

  ngOnInit(): void {
    this.service.isLogin
  }

  goToRegister() {
    this.service.isLogin = false
  }

  recordUser() {
    if(this.isLogin === true) {
      this.isLogin = false 
    } else {
      this.isLogin = true
    }
    console.log(this.isLogin);
  }

}
