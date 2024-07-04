import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit , OnDestroy{
  show:boolean=false;
  showDelete:boolean=false;
  message:string='';
  showsub!:Subscription;
  showDeletesub!:Subscription;
  messagesub!:Subscription;

  constructor(private AuthService:AuthService) {}

  ngOnInit(): void {
    this.showsub = this.AuthService.show.subscribe(
      (data)=>{
        console.log(data);
        this.show = data;
      }
    )
    this.showDeletesub = this.AuthService.Delete.subscribe(
      (data)=>{
        console.log(data);
        this.showDelete = data;
      }
    )
      this.messagesub = this.AuthService.message.subscribe(
      (data)=>{
        console.log(data);
        this.message = data;
      }
    )
  }

  ngOnDestroy(): void {
    this.showsub.unsubscribe();
    this.showDeletesub.unsubscribe();
    this.messagesub.unsubscribe();
  }
}
