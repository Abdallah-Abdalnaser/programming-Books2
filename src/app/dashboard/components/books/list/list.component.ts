import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-list-book',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListBookComponent implements OnInit {
  Books:any[] = [];
  categoryMap: Map<number, Observable<string>> = new Map();
  constructor(private DashboardService:DashboardService){}
  open() {
    this.DashboardService.close.next(false);
  }
  ngOnInit(): void {
    this.DashboardService.getBook().subscribe((data: any) => {
      this.Books = data.data;
      // Prepare category observables
      this.Books.forEach(book => {
        if (!this.categoryMap.has(book.categoryId)) {
          this.categoryMap.set(book.categoryId, this.getCategoryNameById(book.categoryId));
        }
      });
      this.DashboardService.fetching.next(true);
    });
  }


  getCategoryNameById(id: number): Observable<string> {
    return this.DashboardService.getCatigoryById(id).pipe(
      map((data: any) => data.data['name'])  // Assuming the response has a `name` field
    );
  }
}
