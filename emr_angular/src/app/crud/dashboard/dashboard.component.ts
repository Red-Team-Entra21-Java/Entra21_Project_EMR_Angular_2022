import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  titulo: string = 'Dashboard';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.enviarTitulo()
  }

  enviarTitulo() {
    this.router.navigate(['title',this.titulo])
  }

}
