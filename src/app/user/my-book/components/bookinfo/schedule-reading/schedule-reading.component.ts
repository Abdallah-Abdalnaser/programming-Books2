import { Component } from '@angular/core';
import { faArrowUpRightFromSquare, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-schedule-reading',
  templateUrl: './schedule-reading.component.html',
  styleUrl: './schedule-reading.component.scss'
})
export class ScheduleReadingComponent {
  faArrowUpRightFromSquare:IconDefinition = faArrowUpRightFromSquare;
  startDate:Date = new Date();
  endDate:Date = new Date();
}
