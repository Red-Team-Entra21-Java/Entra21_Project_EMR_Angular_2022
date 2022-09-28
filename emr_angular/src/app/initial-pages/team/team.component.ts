import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { TeamService } from 'src/app/services/initial-pages/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(
    public teamService: TeamService
  ) { }

  ngOnInit(): void {
    this.listAllTeam()
  }
  listAllTeam(): void {
    this.teamService
      .getAll()
      .pipe(
        catchError((error) => {
          let teamList: Array<any> = new Array();
          teamList.push(
            {
              id: 1,
              name: 'Emerson Seiler',
              github: 'https://github.com/seiler-emerson',
              linkedin: 'https://www.linkedin.com/in/seileremerson/',
              college: 'Studying Software Engineering',
              image: 'https://avatars.githubusercontent.com/seiler-emerson'
            },
            {
              id: 2,
              name: 'Welliton Borges',
              github: 'https://github.com/Wellitonborges',
              linkedin: 'https://www.linkedin.com/in/seileremerson/',
              college: 'Studying Software Engineering',
              image: 'https://avatars.githubusercontent.com/Wellitonborges'
            }
          );

          return of(teamList);
        })
      )
      .subscribe((response) => {
        console.log(response);
        this.teamService.teamList = response;
      });
  }

}
