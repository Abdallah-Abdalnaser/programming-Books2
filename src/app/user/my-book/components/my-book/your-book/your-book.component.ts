import { Component, OnInit } from '@angular/core';
import { Book } from '../../../../home/book.model';
import { MybooksService } from '../../../services/mybooks.service';
import { faHeart, faL, IconDefinition } from '@fortawesome/free-solid-svg-icons';

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
  favBook:any[]=[];
  favourit!:boolean;
  CurrentlyReading!:boolean;
  Toread!:boolean;

  constructor(private MybooksService:MybooksService) {};

  ngOnInit(): void {
    this.getToFavourite();
    this.totalProduct = this.favBook.length;
  }

  getToFavourite() {
    this.favourit = true;
    this.CurrentlyReading=false;
    this.Toread=false;
    this.MybooksService.getToFavourite().subscribe(
      (data:any)=> {
        this.favBook = data.data;
      }
    )
  }

  getToReadInFeature() {
    this.favourit = false;
    this.CurrentlyReading=false;
    this.Toread=true;
    this.MybooksService.getToReadInFeature().subscribe(
      (data:any)=> {
        this.favBook = data.data;
      }
    )
  }

  getCurrentlyReadLIst(){
    this.favourit = false;
    this.CurrentlyReading=true;
    this.Toread=false;
    this.MybooksService.getCurrentlyReadLIst().subscribe(
      (data:any)=> {
        this.favBook = data.data;
      }
    )
  }

  delete(id:any) {
    if (this.favourit === true) {
      this.MybooksService.deleteToFavourite(id).subscribe(
        ()=>{
          this.getToFavourite()
        }
      )
    }else if(this.CurrentlyReading === true) {
      this.MybooksService.deleteCurrentlyReadLIst(id).subscribe(
        ()=>{
          this.getCurrentlyReadLIst()
        }
      )
    }else if(this.Toread === true){
      this.MybooksService.deleteToReadInFeature(id).subscribe(
        ()=>{
          this.getToReadInFeature()
        }
      )
    }
  }
}
