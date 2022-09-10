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

  userList!: Array<any>;       // OS DADOS VINDO DA API SÃO CARREGADOS AQUI 

  constructor(
    private service: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
      this.list()    
  }

  list() {
    this.service.listUser("texte")
      .pipe(
        catchError(
          (error) => {
            this.userList = this.service.users
            return of(this.userList)
          }
        )
      )
      .subscribe((Response) => {
        // console.log("Resultado:", Response);
      })
  }

  deleteUser(index: number) {
    this.userList.splice(index,1)
  }

  sendData(index:number) {
    let name = this.userList[index].name
    let email = this.userList[index].email
    let login = this.userList[index].login
    let password = this.userList[index].password
    console.log('new-user',name, email, login, password);
    this.router.navigate(['new-user',name, email, login, password]);
    this.service.updateButtonHidden = false
    this.service.indexUpdateUser = index;
  }

  newUser() {
    this.service.updateButtonHidden = true
  }

}
