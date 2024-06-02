import { Component, OnInit } from '@angular/core';
import { Book } from '../../../book.model';
import { HomeService } from '../../../service/home.service';
import { faHeart, IconDefinition ,faArrowUpRightFromSquare, faEye} from '@fortawesome/free-solid-svg-icons';


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
  Books:Book[]=[];
  filterBook:Book[]=[];
  Catigores:string[]=[];
  constructor(private HomeService:HomeService){};
  ngOnInit(): void {
    this.Books = this.HomeService.getbooks
    this.filterBook = this.HomeService.getbooks
    this.totalProduct = this.Books.length;
    this.Catigores = this.HomeService.Catigories;
    this.HomeService.getBookByCatigory("oop")
  }

  catigoryT(type:string) {
    this.filterBook = this.HomeService.getBookByCatigory(type);
  }
}
