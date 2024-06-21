import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-book',
  templateUrl: './my-book.component.html',
  styleUrl: './my-book.component.scss'
})
export class MyBookComponent implements OnInit {
  faArrowLeft=faArrowLeft;

  ngOnInit(): void {
    // window.scrollTo(0,0);
  }
}
