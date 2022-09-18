import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { catchError, of } from 'rxjs';
import { UserService } from 'src/app/services/crud/user.service';
import { SecurityService } from 'src/app/services/security/security.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  user!: any;

  updateButtonHidden: boolean = this.userService.updateButtonHidden;
  name!: string | null
  email!: string | null
  login!: string | null
  password!: string | null


  constructor(
    private userService: UserService,
    private router: Router,
    private securityService: SecurityService,

  ) { }

  ngOnInit(): void {
    if(!this.userService.updateButtonHidden) {
      this.user = this.userService.user;
    } else {
      this.user = {};
    }
  }

  //VERIDICAR
  isLogged() {
    if(this.securityService.authenticated === false) {
      this.router.navigateByUrl("")
    } else {
      this.router.navigateByUrl("user")
    }
  }

  createUser() {
    this.userService
      .create(this.user)
      .pipe(
        catchError((error) => {
          this.userService.userList.push(this.user);   //VERIFICAR
          this.router.navigateByUrl("user")           
          return of( this.userService.userList);
        })
      )
      .subscribe((response: any) => {
        console.log(response);
        if (response) {          
          this.user.push(response);
        }
      });
      this.router.navigateByUrl("user")
  }

  updateUser(): void {
    this.userService
      .update(this.userService.user)
      .pipe(
        catchError((error) => {
          this.userService.userList[this.userService.userList.indexOf(this.userService.user)] = this.userService.user;//VERIFICAR
          return of(error);
        })
      )
      .subscribe((response: any) => {
        console.log(response);
        if (response) {
          this.userService.userList[this.userService.userList.indexOf(this.userService.user)] = response;
        }
      });
      this.router.navigateByUrl("user")
  }

  cancelRecord() {
    this.router.navigateByUrl("user")
  }
}
