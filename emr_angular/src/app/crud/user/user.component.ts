import { Component, OnInit } from '@angular/core';
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
    private service: UserService
  ) { }

  ngOnInit(): void {
    this.listar()
  }

  listar() {
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
        console.log("Resultado:", Response);

      })
  }

  deleteUser(index: number) {
    this.userList.splice(index,1)
  }

}
