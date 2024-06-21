import { Component, OnInit } from '@angular/core';
import { Book } from '../../../book.model';
import { HomeService } from '../../../service/home.service';
import { faHeart, IconDefinition ,faArrowUpRightFromSquare, faEye} from '@fortawesome/free-solid-svg-icons';
import { log } from 'console';


@Component({
  selector: 'app-catigores',
  templateUrl: './catigores.component.html',
  styleUrl: './catigores.component.scss'
})
export class CatigoresComponent implements OnInit {
  faArrowUpRightFromSquare:IconDefinition = faArrowUpRightFromSquare;
  faEye:IconDefinition = faEye;
  faHeart:IconDefinition=faHeart;
  p:number=1;
  itemsperpage:number=8;
  totalProduct!:number;
  Books:any[]=[];
  filterBook:any[]=[];
  Catigores:{id:number,name:string}[]=[];
  fetching:boolean=true;
  constructor(private HomeService:HomeService){};
  ngOnInit(): void {
    this.HomeService.getAllBook().subscribe(
      (data:any) => {
        this.Books = data.data;
        this.HomeService.popularFetch.next(true);
      }
    )
    this.HomeService.getAllBook().subscribe(
      (data:any) => {
        this.filterBook = data.data;
        this.HomeService.popularFetch.next(true);
      }
    )
    this.totalProduct = this.Books.length;
    this.HomeService.getCatigory().subscribe(
      (data) => {
        this.Catigores = [{id:1,name:"All"},...data.data];
        this.HomeService.popularFetch.next(true);
      }
    );
    // this.HomeService.getBookByCatigory("oop")
  }

  catigoryT(type:string) {
    this.fetching = false;
    // this.HomeService.categoriesFetch.next(false);
    if (Number(type) === 1) {
      this.HomeService.getAllBook().subscribe(
        (data:any) => {
          this.filterBook = data.data;
          // this.HomeService.categoriesFetch.next(true);
          this.fetching = true;
        }
      )
    } else {
      this.HomeService.getBookByCatigory(Number(type)).subscribe(
        (data:any)=> {
          this.filterBook = data.data;
          this.fetching = true;
          // this.HomeService.categoriesFetch.next(true);
        }
      )
    }
  }
}
