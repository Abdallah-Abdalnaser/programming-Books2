import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  constructor(private http:HttpClient) { }

  logIn(data:{email:string,password:string}) {
    return this.http.post(`${this.apiLink}/Login`,data);
  }

  register(data:user) {
    return this.http.post(`${this.apiLink}/Register`,data);
  }
}
