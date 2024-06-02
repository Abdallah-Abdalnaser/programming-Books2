import { Injectable } from '@angular/core';
import { Book } from '../book.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  Books:Book[] =[
    new Book(1,"The Programatic Pragrammer","../../../../assets/imgs/Book1.jpg","Aundrew Hunt","",true,"Algorithms"),
    new Book(2,"Object-orianted programming","../../../../assets/imgs/Book2.jpg","Derek Kiong","",false,"oop"),
    new Book(3,"Object-orianted programming","../../../../assets/imgs/Book3.jpg","Nicola M.Josuttis","",true,"oop"),
    new Book(4,"Object-orianted programming","../../../../assets/imgs/Book4.jpg","Robert Lafore","",true,"oop"),
    new Book(5,"Data Structures and algorithms","../../../../assets/imgs/Book5.jpg","john E.Hopcroft","",false,"Data Structure"),
    new Book(6,"Algorithms & Data structures","../../../../assets/imgs/Book6.jpg","Florian Dedov","",false,"Algorithms"),
    new Book(7,"Data Structures and algorithms","../../../../assets/imgs/Book7.jpg","Aundrew Hunt","",false,"Data Structure"),
    new Book(8,"Data Structures and algorithms","../../../../assets/imgs/Book8.jpg","Robert Lafore","",true,"Algorithms"),
    new Book(9,"COmputer Programming in C","../../../../assets/imgs/Book10.jpg","Aundrew HuntAvelino","",false,"Algorithms"),
    new Book(10,"Object-orianted programming","../../../../assets/imgs/Book3.jpg","Nicola M.Josuttis","",true,"oop"),
    new Book(11,"Object-orianted programming","../../../../assets/imgs/Book4.jpg","Robert Lafore","",true,"oop"),
    new Book(12,"Data Structures and algorithms","../../../../assets/imgs/Book5.jpg","john E.Hopcroft","",false,"Data Structure"),
    new Book(13,"Algorithms & Data structures","../../../../assets/imgs/Book6.jpg","Florian Dedov","",false,"Algorithms"),
    new Book(14,"Data Structures and algorithms","../../../../assets/imgs/Book7.jpg","Aundrew Hunt","",false,"Data Structure"),
    new Book(15,"Data Structures and algorithms","../../../../assets/imgs/Book8.jpg","Robert Lafore","",true,"Algorithms"),
    new Book(16,"Computer Programming in C","../../../../assets/imgs/Book10.jpg","Aundrew HuntAvelino","",false,"Algorithms"),
  ]
  Catigories:string[] =[
    "All",
    "Data Structure",
    "Algorithms",
    "oop"
  ];

  get getbooks (){
    return this.Books;
  }

  getBookByCatigory(catigory:string):Book[] {
    if (catigory === "All") {
      return this.Books;
    } else {
      let BookCategire:Book[]=this.Books.filter( function(el) {
        return (el.t === catigory);
      });
      return BookCategire;
    }
  }

  search(name:string):Book[] {
    let res = this.Books.filter((ele)=>{
      return ele.n.toLowerCase().startsWith(name.toLowerCase())
    })
    return res
  }
}
