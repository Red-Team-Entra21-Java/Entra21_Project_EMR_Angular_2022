import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../services/security/security.service';


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
        // rota: ['/dashboard', 'Teste'],
        textContent: 'Dashboard',
        icon: 'dashboard'
      }
    )
    this.links.push(
      {
        rota: 'appointments',
        textContent: 'Appointments',
        icon: 'monitor_heart',
      }
    )
    this.links.push(
      {
        rota: 'patient',
        textContent: 'Records',
        icon: 'people_alt',
        submenu: [
          {
            rota: 'patient',
            title: 'Patients'
          },
          {
            rota: 'doctor',
            title: 'Doctors'
          },
          {
            rota: 'user',
            title: 'Users'
          }
        ]
      }
    )
    this.links.push(
      {
        rota: 'appointment-report',
        textContent: 'Reports',
        icon: 'description',
        submenu: [
          {
            rota: 'appointment-report',
            title: 'Appointments'
          },
          {
            rota: 'patient-report',
            title: 'Patients'
          },
          {
            rota: 'doctor-report',
            title: 'Doctors'
          },
          {
            rota: 'user-report',
            title: 'Users'
          }
        ]
      }
    )
  }


  exit() {
    this.security.authenticated = false
    this.router.navigateByUrl("")
  }

  isAuthenticated(): boolean {
    if (this.security.authenticated) {
      return true;
    } else {
      return false
    }
  }

}
