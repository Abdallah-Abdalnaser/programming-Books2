import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  ApiLink:string='http://zeyad200.runasp.net/Api/V1/';
  constructor(private http:HttpClient) { }

  getusetinfo() {
    return this.http.get(`${this.ApiLink}Authentication/GetCurrentUser`);
  }
}
