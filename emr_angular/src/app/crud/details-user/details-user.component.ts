import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/crud/user.service';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {

  user!: any;

  constructor(
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.user = this.userService.user;
  }
}
