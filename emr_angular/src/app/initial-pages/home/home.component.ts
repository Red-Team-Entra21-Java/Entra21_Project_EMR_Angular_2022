import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private service: SystemService
  ) { }

  ngOnInit(): void {
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


}
