import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { faHome, IconDefinition,faBook,faUser ,faBell,faSearch , faSignOut} from '@fortawesome/free-solid-svg-icons';
import { Book } from '../../../home/book.model';
import { HomeService } from '../../../home/service/home.service';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @ViewChild("input") input!:ElementRef;
  suggestionsBook:Book[] = [];
  faSearch:IconDefinition=faSearch;
  faHome:IconDefinition=faHome;
  faBook:IconDefinition=faBook;
  faUser:IconDefinition=faUser;
  faBell:IconDefinition=faBell;
  faSignOut:IconDefinition=faSignOut;
  userData:any;
  show:boolean=false
  constructor(private HomeService:HomeService , private UserService:UserService , private router:Router , private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.UserService.getusetinfo().subscribe(
      (data:any)=> {
        this.userData = data.data;
      }
    )
  }

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

  logout() {
    window.localStorage.clear();
    this.router.navigate(['/auth/login'],{relativeTo:this.route})
  }
}
