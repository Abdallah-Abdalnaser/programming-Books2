import { Component } from '@angular/core';
import { faClock, IconDefinition , faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {
  faClock:IconDefinition = faClock;
  faExclamationCircle:IconDefinition = faExclamationCircle;
}
