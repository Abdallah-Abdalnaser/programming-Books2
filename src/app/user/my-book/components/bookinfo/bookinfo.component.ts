import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { faArrowUpRightFromSquare, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Book } from '../../../home/book.model';
import { MybooksService } from '../../services/mybooks.service';

@Component({
  selector: 'app-bookinfo',
  templateUrl: './bookinfo.component.html',
  styleUrl: './bookinfo.component.scss'
})
export class BookinfoComponent implements OnInit{
  bookInfo!:Book;
  faArrowUpRightFromSquare:IconDefinition=faArrowUpRightFromSquare;
  constructor(private route:ActivatedRoute ,private MybooksService:MybooksService) {}


  ngOnInit(): void {
    this.route.params.subscribe(
      (data:Params)=>{
        this.bookInfo = this.MybooksService.getBookById(Number(data['id']));
        console.log(this.MybooksService.getBookById(Number(data['id'])))
        console.log(Number(data['id']))
      }
    )

  }
}
