import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { faHome, IconDefinition,faBook,faUser ,faBell,faSearch} from '@fortawesome/free-solid-svg-icons';
import { Book } from '../../../home/book.model';
import { HomeService } from '../../../home/service/home.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild("input") input!:ElementRef;
  suggestionsBook:Book[] = [];
  faSearch:IconDefinition=faSearch;
  faHome:IconDefinition=faHome;
  faBook:IconDefinition=faBook;
  faUser:IconDefinition=faUser;
  faBell:IconDefinition=faBell;

  constructor(private HomeService:HomeService) {}

  search(e:any) {
    if (!(e.target.value == '')) {
      this.suggestionsBook = this.HomeService.search(e.target.value);
    } else {
      this.suggestionsBook = [];
    }
  }

  hidden() {
    if (this.suggestionsBook.length == 0) {
      return 'none'
    } else {
      return 'flex'
    }
  }

  close() {
    this.suggestionsBook = [];
    this.input.nativeElement.value = '';
  }
}
