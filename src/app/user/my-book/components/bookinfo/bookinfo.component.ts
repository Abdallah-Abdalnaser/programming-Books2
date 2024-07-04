import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { faArrowUpRightFromSquare, IconDefinition , faHeart , faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import { Book } from '../../../home/book.model';
import { MybooksService } from '../../services/mybooks.service';
import { UserService } from '../../../services/user.service';
import { error } from 'console';

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
  constructor(private route:ActivatedRoute ,private MybooksService:MybooksService , private UserService:UserService) {}



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
        this.UserService.show.next(true);
        this.UserService.message.next(data.data)
      },
      (error) => {
        this.UserService.Delete.next(true);
        this.UserService.message.next(error.error.message);
      }
    )
    this.UserService.show.next(false);
    this.UserService.Delete.next(false);
  }

  addToReadInFeature() {
    this.MybooksService.addToReadInFeature(this.id).subscribe(
      (data:any)=>{
        this.UserService.show.next(true);
        this.UserService.message.next(data.data)
      },
      (error) => {
        this.UserService.Delete.next(true);
        this.UserService.message.next("This Book is Already Exsists");
      }
    )
    this.UserService.show.next(false);
    this.UserService.Delete.next(false);
  }

  CurrentlyReadLIst() {
    this.MybooksService.CurrentlyReadLIst(this.id).subscribe(
      (data:any)=> {
        this.UserService.show.next(true);
        this.UserService.message.next(data.data)
      }
    )
    this.UserService.show.next(false);
  }
}
