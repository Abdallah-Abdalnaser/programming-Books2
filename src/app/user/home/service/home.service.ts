import { Injectable } from '@angular/core';
import { Book } from '../book.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  APILink:string = 'http://zeyad200.runasp.net/Api/V1/';
  popularFetch = new Subject<boolean>();
  // categoriesFetch = new Subject<boolean>();

  Books:any[] =[]

  constructor(private HTTP:HttpClient) {
    this.getAllBook().subscribe(
      (data:any) => {
        this.Books = data.data;
      }
    )
    console.log(this.Books);

  }


  getAllBook() {
    return this.HTTP.get(`${this.APILink}Book/GetAllBooks`)
  }

  getCatigory() {
    return this.HTTP.get<any>(`${this.APILink}Category/GetAllCategories`);
  }

  get getbooks (){
    return this.Books;
  }

  getBookByCatigory(id:number):any {
    return this.HTTP.get(`${this.APILink}Book/GetAllBooksInCategory/${id}`)
  }

  search(name:string):Book[] {
    let res = this.Books.filter((ele)=>{
      return ele.title.toLowerCase().startsWith(name.toLowerCase())
    })
    return res
  }
}
