import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { faArrowUpRightFromSquare, IconDefinition , faHeart , faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import { Book } from '../../../home/book.model';
import { MybooksService } from '../../services/mybooks.service';

@Component({
  selector: 'app-bookinfo',
  templateUrl: './bookinfo.component.html',
  styleUrl: './bookinfo.component.scss'
})
export class BookinfoComponent implements OnInit{
  bookInfo!:any;
  faArrowUpRightFromSquare:IconDefinition=faArrowUpRightFromSquare;
  faHeart:IconDefinition=faHeart;
  faBookBookmark:IconDefinition=faBookBookmark;
  fetching:boolean=true;
  id!:number;
  message:string='';
  constructor(private route:ActivatedRoute ,private MybooksService:MybooksService) {}


  ngOnInit(): void {
    scrollTo(0,0);
    this.fetching = false;
    this.route.params.subscribe(
      (data:Params)=>{
        this.id = Number(data['id']);
        this.MybooksService.getBookById(Number(data['id'])).subscribe(
          (data:any) => {
            this.bookInfo = data.data
            this.fetching = true;
          }
        )
      }
    )
  }


  addtofavourite() {
    this.MybooksService.addToFavourite(this.id).subscribe(
      (data:any)=>{
        this.message=data.data;
      }
    )
  }

  addToReadInFeature() {
    this.MybooksService.addToReadInFeature(this.id).subscribe(
      (data:any)=>{
        this.message = data.data;
      }
    )
  }

  CurrentlyReadLIst() {
    this.MybooksService.CurrentlyReadLIst(this.id).subscribe(
      (data:any)=> {
        console.log(data);
        this.message = data.data;
      }
    )
  }
}
