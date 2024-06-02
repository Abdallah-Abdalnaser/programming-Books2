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
  Books: Book[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.Books = this.homeService.getbooks;
    console.log(this.Books);
  }
}
