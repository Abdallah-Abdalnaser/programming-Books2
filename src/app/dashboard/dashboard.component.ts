import { Component, OnInit } from '@angular/core';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  close:boolean=true;
  constructor(private DashboardService:DashboardService) {}

  ngOnInit(): void {
    this.DashboardService.close.subscribe(
      (data)=> {
        this.close = data;
      }
    )
  }
}
