import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.scss'
})
export class UserlistComponent  implements OnInit{
  p:number=1;
  itemsperpage:number=8;
  totalProduct!:number;
  users:any[]=[];
  constructor(private DashboardService:DashboardService) {}

  ngOnInit(): void {
    this.DashboardService.getusers().subscribe(
      (data:any)=> {
        this.users = data.data;
        this.DashboardService.numberOfUsers.next(this.users.length)
        this.DashboardService.fetching.next(true)
      }
    )
  }
}
