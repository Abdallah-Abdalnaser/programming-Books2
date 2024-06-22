import { Component, OnDestroy, OnInit } from '@angular/core';
import { MybooksService } from './my-book/services/mybooks.service';
import { UserService } from './services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit,OnDestroy {
  close:boolean=true;
  show:boolean=false;
  showDelete:boolean=false;
  message:string='';
  closesub!:Subscription;
  showsub!:Subscription;
  showDeletesub!:Subscription;
  messagesub!:Subscription;
  constructor(private MybooksService:MybooksService, private UserService:UserService) {}

  ngOnInit(): void {
    this.closesub = this.MybooksService.close.subscribe(
      (data)=> {
        this.close = data;
      }
    )
    this.showsub = this.UserService.show.subscribe(
      (data)=>{
        this.show = data;
      }
    )
    this.showDeletesub = this.UserService.Delete.subscribe(
      (data)=>{
        this.showDelete = data;
      }
    )
    this.messagesub = this.UserService.message.subscribe(
      (data)=>{
        this.message = data;
      }
    )
  }

  ngOnDestroy(): void {
    this.closesub.unsubscribe();
    this.showsub.unsubscribe();
    this.showDeletesub.unsubscribe();
    this.messagesub.unsubscribe();
  }
}
