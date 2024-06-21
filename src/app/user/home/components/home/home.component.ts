import { Component, OnInit } from '@angular/core';
import { faArrowUpRightFromSquare, IconDefinition ,faAngleRight , faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { HomeService } from '../../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  faArrowUpRightFromSquare:IconDefinition=faArrowUpRightFromSquare;
  faAngleLeft:IconDefinition=faAngleLeft;
  faAngleRight:IconDefinition=faAngleRight;
  fetching:boolean=true;
  constructor(private HomeService:HomeService) {}
  ngOnInit(): void {
    scrollTo(0,0);
    this.fetching = false;
    this.HomeService.popularFetch.subscribe(
      (data)=>{
        console.log(data);
        this.fetching = data;
      }
    )
  }
}
