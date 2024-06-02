import { Component } from '@angular/core';
import { faArrowUpRightFromSquare, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {
  faArrowUpRightFromSquare:IconDefinition = faArrowUpRightFromSquare;
}
