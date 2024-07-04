import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface user {
  firstName:string,
  lastName:string,
  address:string,
  userName:string,
  email:string,
  password:string,
  confirmPassword:string,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiLink:string="http://zeyad200.runasp.net/Api/V1/Authentication";
  show = new Subject<boolean>();
  Delete = new Subject<boolean>();
  message = new Subject<string>();
  constructor(private http:HttpClient) { }

  logIn(data:{email:string,password:string}) {
    return this.http.post(`${this.apiLink}/Login`,data);
  }

  register(data:user) {
    return this.http.post(`${this.apiLink}/Register`,data);
  }

  getRole(token:any) {
    return JSON.parse(atob(token.split('.')[1]))['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
  }
}
