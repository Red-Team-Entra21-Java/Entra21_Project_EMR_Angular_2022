import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { UserService } from 'src/app/services/crud/user.service';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userIdSelected!: number;
  prefix!: string;

  constructor(
    public userService: UserService,
    private system: SystemService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.listAllUser();
  }

  listAllUser(): void {
    this.userService
      .getAll()
      .pipe(
        catchError((error) => {
          let userList: Array<any> = new Array();
          userList.push(
            {
              id: 3,
              name: "Emerson Seiler",
              login: "admin",
              email: "seiler@emr.com",
              password: "admin",
              type: "Admin",
              doctor: null
            }
          );        
          return of(userList);
        })
      )
      .subscribe((response) => {
        this.userService.userList = response;
      });
  }

  newUser(): void {
    this.userService.updateButtonHidden = true
  }

  updateUser(user: any):void {
    this.userService.updateButtonHidden = false
    this.userService
    .getById(user)
    .pipe(
      catchError((error) => {
        return of(false);
      })
      )
      .subscribe((response: any) => {
        this.userService.user = response[0];
        this.router.navigateByUrl("new-user")
      });
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
        if (response) {
          this.userService.userList.splice(this.userService.userList.indexOf(user), 1);
        }
      });
  }

  saveUserId(userId: number) {
    this.userIdSelected = userId;
  }

  findUser(prefix: string) {
    if(prefix === "" ) {
      this.listAllUser()
    } else {
      this.userService
      .startWith(prefix)
      .pipe(
        catchError((error) => {
          return of(false);
        })
        )
        .subscribe((response: any) => {
          this.userService.userList = response;
        });
    }
  }

  detailUser(user: any):void {
    this.userService
    .getById(user)
    .pipe(
      catchError((error) => {
        return of(false);
      })
      )
      .subscribe((response: any) => {
        this.userService.user = response;
        this.router.navigateByUrl("detail-user")
      });
  }

  allowedUser(): boolean {
    if(this.system.userTypeLogged === 'Admin' ) {
      return true;
    } else {
      return false;
    }
  }
}


