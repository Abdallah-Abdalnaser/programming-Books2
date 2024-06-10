import { Component } from '@angular/core';
import { faBook , faLayerGroup, IconDefinition , faRightFromBracket} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  faBook:IconDefinition = faBook;
  faLayerGroup:IconDefinition = faLayerGroup;
  faRightFromBracket:IconDefinition = faRightFromBracket;
}
