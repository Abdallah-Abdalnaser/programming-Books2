import { Component } from '@angular/core';
import { faArrowUpRightFromSquare, IconDefinition ,faAngleRight , faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  faArrowUpRightFromSquare:IconDefinition=faArrowUpRightFromSquare;
  faAngleLeft:IconDefinition=faAngleLeft;
  faAngleRight:IconDefinition=faAngleRight;
}
