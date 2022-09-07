import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private system: SystemService
  ) { }

  ngOnInit(): void {
    this.enviarTitulo()
  }

  enviarTitulo() {
    this.system.currentTitle = "Dashboard"
  }

}
