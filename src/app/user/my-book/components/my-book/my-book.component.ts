import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-book',
  templateUrl: './my-book.component.html',
  styleUrl: './my-book.component.scss'
})
export class MyBookComponent {
  faArrowLeft=faArrowLeft;
}
