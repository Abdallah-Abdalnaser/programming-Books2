import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faBagShopping, faBars, faChartPie, faSignOut,IconDefinition , faListUl , faUserEdit , faBookOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  faBars:IconDefinition = faBars;
  faBagShopping:IconDefinition = faBagShopping;
  faChartPie:IconDefinition = faChartPie;
  faSignOut:IconDefinition = faSignOut;
  faListUl:IconDefinition = faListUl;
  faUserEdit:IconDefinition = faUserEdit;
  faBookAtlas:IconDefinition = faBookOpen;
  showSideBar:boolean = false;
  mainWidth:string = '60px';

  constructor(private router:Router , private route:ActivatedRoute) {}

  showSideBare() {
    this.showSideBar=!this.showSideBar;
    if (this.showSideBar !== true) {
      this.mainWidth = '60px';
    } else {
      this.mainWidth = '250px';
    }
  }
  logout() {
    this.router.navigate(['/auth/login'],{relativeTo:this.route})
    window.localStorage.clear();
  }
}
