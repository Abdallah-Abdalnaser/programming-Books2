import { Component, OnInit } from '@angular/core';
import { Book } from '../../../../home/book.model';
import { HomeService } from '../../../../home/service/home.service';
import { faHeart, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.scss']
})
export class RecommendComponent implements OnInit {
  faHeart: IconDefinition = faHeart;
  Books:any[]=[];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getAllBook().subscribe(
      (data:any)=> {
        this.Books = data.data;
      }
    )
  }

  scrolltop() {
    window.scroll(0,0);
  }
}
