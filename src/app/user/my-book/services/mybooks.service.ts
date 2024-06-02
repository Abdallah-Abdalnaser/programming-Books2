import { Injectable } from '@angular/core';
import { Book } from '../../home/book.model';
import { HomeService } from '../../home/service/home.service';

@Injectable({
  providedIn: 'root'
})
export class MybooksService {
  favBook:Book[]=[
    new Book(1,"The Programatic Pragrammer","../../../assets/imgs/Book1.jpg","Aundrew Hunt","",true,"Algorithms","March 25 ,2024","March 25 ,2024"),
    new Book(3,"Object-orianted programming","../../../assets/imgs/Book3.jpg","Nicola M.Josuttis","",true,"oop","March 25 ,2024","March 25 ,2024"),
    new Book(4,"Object-orianted programming","../../../assets/imgs/Book4.jpg","Robert Lafore","",true,"oop","March 25 ,2024","March 25 ,2024"),
    new Book(8,"Data Structures and algorithms","../../../assets/imgs/Book8.jpg","Robert Lafore","",true,"Algorithms","March 25 ,2024","March 25 ,2024"),
    new Book(10,"Object-orianted programming","../../../assets/imgs/Book3.jpg","Nicola M.Josuttis","",true,"oop","March 25 ,2024","March 25 ,2024"),
    new Book(11,"Object-orianted programming","../../../assets/imgs/Book4.jpg","Robert Lafore","",true,"oop","March 25 ,2024","March 25 ,2024"),
    new Book(15,"Data Structures and algorithms","../../../assets/imgs/Book8.jpg","Robert Lafore","",true,"Algorithms","March 25 ,2024","March 25 ,2024"),
  ];
  constructor(private HomeService:HomeService) { }

  get favourite():Book[] {
    return this.favBook;
  }

  getBookById(id:number):Book {
    let bookinfo = this.HomeService.Books.filter((ele,index)=>{
      return ele.i === id
    })
    return bookinfo[0];
  }
}
