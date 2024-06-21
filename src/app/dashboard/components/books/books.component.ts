import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent implements OnInit {
  fetching:boolean=true;
  constructor(private DashboardService:DashboardService){}
  open() {
    this.DashboardService.close.next(false);
  }
  ngOnInit(): void {
    this.fetching = false;
    this.DashboardService.fetching.subscribe(
      (data) => {
        this.fetching = data
      }
    )
  }
}
