import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  newUser() {
    (<HTMLInputElement>document.getElementById('formNewUser')).addEventListener('submit', (event) => {
      event.preventDefault()
      let data = this.getData()
      //console.log("Recebi", data)

      let newUserButton =  (<HTMLInputElement>document.querySelector('#newUserButton'))

      if(newUserButton.offsetParent !== null) {
        console.log("Salvando",data)
      } else {
        // patient[patient.indexOf(update)] = data
        // console.log(data);
      }

    });
  }


  getData() {
    let name: string = (<HTMLInputElement>document.getElementById("userNameRecord")).value
    let email: string = (<HTMLInputElement>document.getElementById("email")).value
    let userName: string = (<HTMLInputElement>document.getElementById("userName")).value
    let password: string = (<HTMLInputElement>document.getElementById("passwordUser")).value

    return {
      name: name,
      email: email,
      userName: userName,
      password: password
    }
  }

}
