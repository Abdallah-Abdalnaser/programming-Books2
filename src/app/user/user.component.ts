import { Component, OnInit } from '@angular/core';
import { MybooksService } from './my-book/services/mybooks.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  close:boolean=true;

  constructor(private MybooksService:MybooksService) {}

  ngOnInit(): void {
    this.MybooksService.close.subscribe(
      (data)=> {
        this.close = data;
      }
    )
  }
}
