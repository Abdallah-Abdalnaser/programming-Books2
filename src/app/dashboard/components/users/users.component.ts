import { Component, OnInit } from '@angular/core';
import { faUserTie, IconDefinition , faUser , faFileCircleCheck ,faGear } from '@fortawesome/free-solid-svg-icons';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{
  faUserTie:IconDefinition=faUserTie;
  faUser:IconDefinition=faUser;
  faFileCircleCheck:IconDefinition=faFileCircleCheck;
  faGear:IconDefinition=faGear;
  Adminstrators:number = 1;
  UsersNumber!:number;
  Service:number = 3;
  Overall!:number ;
  fetching:boolean=true;
  constructor(private DashboardService:DashboardService) {}

  ngOnInit(): void {
    this.fetching = false;
    this.DashboardService.numberOfUsers.subscribe(
      (data) => {
        this.UsersNumber = data;
        this.Overall = this.UsersNumber + this.Adminstrators + this.Service;
        this.DashboardService.fetching.subscribe(
          (data) => {
            this.fetching = data;
          }
        )
      }
    )
  }
}
