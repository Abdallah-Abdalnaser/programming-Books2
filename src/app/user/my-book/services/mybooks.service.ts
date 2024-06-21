import { Injectable } from '@angular/core';
import { Book } from '../../home/book.model';
import { HomeService } from '../../home/service/home.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MybooksService {
  ApiLink:string = "http://zeyad200.runasp.net/Api/V1/";
  ApiSummarize:string="http://127.0.0.1:5000/";
  ApiQuestionAnswer:string ="http://zeyad2002306.runasp.net/api/QuestionAnswer/GetAnswer";
  Apitranslate:string ="http://127.0.0.1:5000/translate";
  gptApi:string ="https://e759-35-233-190-137.ngrok-free.app";
  close =new Subject<boolean>();
  refresh=new Subject<boolean>();
  Bookid=new Subject<string>();

  constructor(private HomeService:HomeService , private HTTP:HttpClient) { }

  getBookById(id:number):any {
    return this.HTTP.get(`${this.ApiLink}Book/GetBookById/${id}`);
  }

  // Notes Methods
  showNotes(id:number) {
    return this.HTTP.get(`${this.ApiLink}UserActivity/GetNotes/${id}`)
  }

  deleteNotes(id:number , bookid:number ) {
    let params = new HttpParams()
      .set('BookId', bookid.toString())
      .set('NoteId', id.toString());
    return this.HTTP.delete(`${this.ApiLink}UserActivity/DeleteNote`,{params})
  }

  Addnote(data:any) {
    return this.HTTP.post(`${this.ApiLink}UserActivity/AddNote`,data)
  }


  // Machine Method
  getsummarize(text:{text:string}) {
    return this.HTTP.post(this.ApiSummarize,text);
  }

  QuestionAswer(text:{text:string}) {
    return this.HTTP.post(this.ApiQuestionAnswer,text);
  }

  translator(text:{text:string}) {
    return this.HTTP.post(this.Apitranslate,text);
  }

  gpt(text:any) {
    return this.HTTP.post(this.gptApi,text);
  }

  // Book Method

  addToFavourite(id:any) {
    return this.HTTP.post(`${this.ApiLink}UserActivity/AddBookToFavouriteList/${id}`,id)
  }

  addToReadInFeature(id:any) {
    return this.HTTP.post(`${this.ApiLink}UserActivity/AddBookToToReadList/${id}`,id)
  }

  CurrentlyReadLIst(id:any) {
    return this.HTTP.post(`${this.ApiLink}UserActivity/AddBookToCurrentlyReadingList/${id}`,id)
  }

  getToFavourite() {
    return this.HTTP.get(`${this.ApiLink}UserActivity/GetFavouriteList`)
  }

  getToReadInFeature() {
    return this.HTTP.get(`${this.ApiLink}UserActivity/GetToReadList`)
  }

  getCurrentlyReadLIst(){
    return this.HTTP.get(`${this.ApiLink}UserActivity/GetCurrentlyReadingList`)
  }

  deleteToFavourite(id:any) {
    return this.HTTP.delete(`${this.ApiLink}UserActivity/RemoveBookFromFavouriteList/${id}`,id)
  }

  deleteToReadInFeature(id:any) {
    return this.HTTP.delete(`${this.ApiLink}UserActivity/RemoveBookFromToReadList/${id}`,id)
  }

  deleteCurrentlyReadLIst(id:any){
    return this.HTTP.delete(`${this.ApiLink}UserActivity/RemoveBookFromCurrentlyReadingList/${id}`,id)
  }
}
