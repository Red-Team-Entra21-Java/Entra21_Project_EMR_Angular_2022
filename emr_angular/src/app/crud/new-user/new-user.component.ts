import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserService } from 'src/app/services/crud/user.service';
import { SecurityService } from 'src/app/services/security/security.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  updateButtonHidden: boolean = this.service.updateButtonHidden;
  name!: string | null
  email!: string | null
  login!: string | null
  password!: string | null


  constructor(
    private service: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private securityService: SecurityService
  ) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get("name")
    this.email = this.route.snapshot.paramMap.get("email")
    this.login = this.route.snapshot.paramMap.get("login")
    this.password = this.route.snapshot.paramMap.get("password")
  }

  saveUser() {
    (<HTMLInputElement>document.getElementById('formNewUser')).addEventListener('submit', (event) => {
      event.preventDefault()
      let data = this.getData()

      if (this.updateButtonHidden === true) {
        console.log("Salvando", data)
        this.service.users.push(data)

        this.isLogged()

      } else {
        this.service.users[this.service.indexUpdateUser] = data
      }
      this.router.navigateByUrl("user")

    });
  }

  getData() {
    this.name = (<HTMLInputElement>document.getElementById("userNameRecord")).value
    this.email = (<HTMLInputElement>document.getElementById("userEmail")).value
    this.login = (<HTMLInputElement>document.getElementById("login")).value
    this.password = (<HTMLInputElement>document.getElementById("passwordUser")).value

    return {
      name: this.name,
      email: this.email,
      login: this.login,
      password: this.password
    }
  }

  isLogged() {
    if(this.securityService.authenticated === false) {
      this.router.navigateByUrl("")
    } else {
      this.router.navigateByUrl("user")
    }
  }

  cancelRecord() {
    this.router.navigateByUrl("appointments")
  }
}
