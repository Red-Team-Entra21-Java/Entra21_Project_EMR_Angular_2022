import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/crud/user.service';

@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.css']
})
export class UserReportComponent implements OnInit {

  userList!: Array<any>;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userList = this.userService.users
  }

}
