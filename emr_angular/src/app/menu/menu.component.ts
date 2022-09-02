import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  links!: Array<any>;

  constructor(
    private router: Router,
    private security: SecurityService
  ) { }

  ngOnInit(): void {
    this.links = new Array();

    this.links.push(
      {
        rota: 'dashboard',
        textContent: 'Dashboard',
        icon: 'dashboard'
      }
    )
    this.links.push(
      {
        rota: 'appointments',
        textContent: 'Atendimentos',
        icon: 'monitor_heart',
      }
    )
    this.links.push(
      {
        rota: 'patient',
        textContent: 'Cadastros',
        icon: 'people_alt',
        submenu: [
          {
            rota: 'patient',
            title: 'Pacientes'
          },
          {
            rota: 'doctor',
            title: 'Médicos'
          },
          {
            rota: 'user',
            title: 'Usuários'
          }
        ]
      }
    )
    this.links.push(
      {
        rota: 'patient',
        textContent: 'Relatórios',
        icon: 'description'
      }
    )
  }

  isAuthenticated(): boolean {
    if(this.security.authenticated) {
      return true;
    } else {
      return false
    }
  }

}
