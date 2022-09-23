import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { AboutService } from 'src/app/services/initial-pages/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    public aboutService: AboutService
  ) { }

  ngOnInit(): void {
    this.listAllTeam()
  }
  listAllTeam(): void {
    this.aboutService
      .getAll()
      .pipe(
        catchError((error) => {
          let teamList: Array<any> = new Array();
          teamList.push(
            {
              id: 1,
              name: 'Emerson Seiler',
              github: 'https://github.com/seiler-emerson',
              college: 'Studying Software Engineering',
              image: 'https://avatars.githubusercontent.com/u/42720635?v=4'
            },
            {
              id: 2,
              name: 'Welliton Borges',
              github: 'https://github.com/wellitonborges',
              college: 'Studying Software Engineering',
              image: 'https://avatars.githubusercontent.com/u/48368109?v=4'
            }
          );

          return of(teamList);
        })
      )
      .subscribe((response) => {
        console.log(response);
        this.aboutService.teamList = response;
      });
  }


}