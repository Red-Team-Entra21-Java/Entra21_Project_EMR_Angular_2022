import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SecurityService } from '../services/security/security.service';
import { SystemService } from '../services/system.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  titulo!: string | null

  constructor(
    private router: Router,
    private security: SecurityService,
    private route: ActivatedRoute,
    public system: SystemService

  ) { }

  ngOnInit(): void {
    this.titulo = this.route.snapshot.paramMap.get('title')
    console.log(this.titulo);
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
