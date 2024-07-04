import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  Apilink:string ="http://zeyad200.runasp.net/Api/V1/";
  close = new Subject<boolean>();
  udateBook = new Subject<boolean>();
  numberOfUsers = new Subject<number>();
  fetching = new Subject<boolean>();
  newCategory = new Subject<any>();
  newBook = new Subject<any>();
  Catigorytext = new Subject<string>();
  CatigoryaUpdate = new Subject<boolean>();
  show = new Subject<boolean>();
  Delete = new Subject<boolean>();
  message = new Subject<string>();
  Bookid = new Subject<number>();
  constructor(private http:HttpClient) { }

  getusers() {
    return this.http.get(`${this.Apilink}Authentication/GetAllUsers`);
  }

// Catigore
  getCategories() {
    return this.http.get(`${this.Apilink}Category/GetAllCategories`);
  }

  getCatigoryById(id:number) {
    return this.http.get(`${this.Apilink}Category/GetCategoryById/${id}`);
  }

  DeleteCatigory(id:number) {
    return this.http.delete(`${this.Apilink}Category/DeleteCategory/${id}`)
  }

  addCatigory(name:any) {
    return this.http.post(`${this.Apilink}Category/AddCategory`,name)
  }

  updateCatigory(catigory:any) {
    return this.http.put(`${this.Apilink}Category/UpdateCategory`,catigory)
  }
  // Book
  getBook() {
    return this.http.get(`${this.Apilink}Book/GetAllBooks`);
  }

  getBookById(id:number) {
    return this.http.get(`${this.Apilink}Book/GetBookById/${id}`);
  }

  addBook(data:any) {
    return this.http.post("http://zeyad200.runasp.net/Api/V1/Book/AddBook",data);
  }

  updateBook(data:any , id:number) {
    return this.http.put(`${this.Apilink}Book/UpdateBook?Id=${id}`,data);
  }

  DeletBook(id:any) {
    return this.http.delete(`${this.Apilink}Book/DeleteBook/${id}`);
  }
}
