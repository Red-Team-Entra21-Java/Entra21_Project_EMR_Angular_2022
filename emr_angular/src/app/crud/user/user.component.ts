import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { UserService } from 'src/app/services/crud/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.listAllUser();
  }

  listAllUser(): void {
    this.userService
      .getAll()
      .pipe(
        catchError((error) => {
          let userList: Array<any> = new Array();
          userList.push({ id: 1, name: 'Administrator', login: "admin", email:"admin@emr.com", password: "admin" });
          userList.push({ id: 2, name: 'Doctor', login: "doctor", email:"doctor@emr.com", password: "doctor" });
          userList.push({ id: 3, name: 'User', login: "user", email:"user@emr.com", password: "user" });
          
          return of(userList);
        })
      )
      .subscribe((response) => {
        // console.log(response);
        this.userService.userList = response;
      });
  }

  newUser(): void {
    this.userService.updateButtonHidden = true
  }

  updateUser(user: any): void {
    this.userService.updateButtonHidden = false
    this.userService.user = user;
  }
  
  deleteUser(user: any): void {
    this.userService
      .delete(user)
      .pipe(
        catchError((error) => {
          return of(false);
        })
      )
      .subscribe((response: any) => {
        console.log(response);
        if (response) {
          this.userService.userList.splice(this.userService.userList.indexOf(user), 1);
        }
      });
  }

}


