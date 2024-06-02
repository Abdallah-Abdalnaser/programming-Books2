import { Component, OnInit } from '@angular/core';
import { Book } from '../../../../home/book.model';
import { MybooksService } from '../../../services/mybooks.service';
import { faHeart, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-your-book',
  templateUrl: './your-book.component.html',
  styleUrl: './your-book.component.scss'
})
export class YourBookComponent implements OnInit {
  faHeart:IconDefinition=faHeart;
  p:number=1;
  itemsperpage:number=4;
  totalProduct!:number;
  favBook:Book[]=[];
  constructor(private MybooksService:MybooksService) {};
  ngOnInit(): void {
    this.favBook = this.MybooksService.favourite;
    this.totalProduct = this.MybooksService.favourite.length;
  }
}
