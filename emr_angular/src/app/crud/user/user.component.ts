import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { UserService } from 'src/app/services/crud/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userList!: Array<any>;
  user!: any;
  register!: boolean;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.userService
      .getAll()
      .pipe(
        catchError((error) => {
          let userList: Array<any> = new Array();
          userList.push({ id: 1, name: 'Administrator', login: "admin", email:"admin@emr.com", password: "admin" });
          userList.push({ id: 1, name: 'Doctor', login: "doctor", email:"doctor@emr.com", password: "doctor" });
          userList.push({ id: 1, name: 'User', login: "user", email:"user@emr.com", password: "user" });
          
          return of(userList);
        })
      )
      .subscribe((response) => {
        console.log(response);
        this.userList = response;
      });
  }

  openForm(): void {
    this.user = {};
    this.register = true;
  }

  closeForm(): void {

    this.user = {};
    this.register = false;
  }

  updateForm(user: any): void {
    this.user = user;
    this.register = true;
  }

  create(): void {

    if (!this.validForm()) {
      alert('Preencha os campos obrigatorios');
      return;
    }



    this.userService
      .create(this.user)
      .pipe(
        catchError((error) => {
          return of(error);
        })
      )
      .subscribe((response: any) => {
        console.log(response);
        if (response) {
          this.user.push(response);
          this.closeForm();
        }
      });
  }

  validForm(): boolean {
    let valid: boolean = true;
    if (!this.user.name) {
      valid = false;
    }

    return valid;
  }

  update(): void {
    if (!this.validForm()) {
      alert('Preencha os campos obrigatorios');
      return;
    }
    this.userService
      .update(this.user)
      .pipe(
        catchError((error) => {
          return of(error);
        })
      )
      .subscribe((response: any) => {
        console.log(response);
        if (response) {
          this.userList[this.userList.indexOf(this.user)] = response;
          this.closeForm();
        }
      });
  }

  delete(user: any): void {
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
          this.userList.splice(this.userList.indexOf(user), 1);
        }
      });
  }
}
  // userList!: Array<any>;       // OS DADOS VINDO DA API SÃO CARREGADOS AQUI 

  // constructor(
  //   private userService: UserService,
  //   private router: Router
  // ) { }

  // ngOnInit(): void {
  //     this.list()    
  // }

  // list() {
  //   this.userService.listAllUsers()
  //     .pipe(
  //       catchError(
  //         (error) => {
  //           this.userList = this.userService.users
  //           return of(this.userList)
  //         }
  //       )
  //     )
  //     .subscribe((Response) => {
  //       console.log("Resultado:", Response);
  //       this.userService.users = Response
  //       this.userList = this.userService.users
  //     })
  // }

  // deleteUser(index: number) {
  //   this.userList.splice(index,1)
  // }

  // sendData(index:number) {
  //   let name = this.userList[index].name
  //   let email = this.userList[index].email
  //   let login = this.userList[index].login
  //   let password = this.userList[index].password
  //   console.log('new-user',name, email, login, password);
  //   this.router.navigate(['new-user',name, email, login, password]);
  //   this.userService.updateButtonHidden = false
  //   this.userService.indexUpdateUser = index;
  // }

  // newUser() {
  //   this.userService.updateButtonHidden = true
  // }


