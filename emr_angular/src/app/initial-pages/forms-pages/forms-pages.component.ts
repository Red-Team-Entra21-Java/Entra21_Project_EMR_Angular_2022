import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-forms-pages',
  templateUrl: './forms-pages.component.html',
  styleUrls: ['./forms-pages.component.css']
})
export class FormsPagesComponent implements OnInit {

  isLogin: boolean = this.service.isLogin;

  constructor(
    private service: SystemService
  ) { }

  ngOnInit(): void {
    this.isLogin
  }

}
