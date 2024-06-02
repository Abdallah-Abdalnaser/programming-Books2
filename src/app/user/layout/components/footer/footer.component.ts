import { Component } from '@angular/core';
import { faPhone ,faEnvelope, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  faPhone:IconDefinition=faPhone;
  faEnvelope:IconDefinition=faEnvelope;
}
