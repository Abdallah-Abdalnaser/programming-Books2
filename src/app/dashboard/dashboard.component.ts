import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardService } from './services/dashboard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit , OnDestroy {
  close:boolean=true;
  show:boolean=false;
  showDelete:boolean=false;
  message:string='';
  closesub!:Subscription;
  showsub!:Subscription;
  showDeletesub!:Subscription;
  messagesub!:Subscription;
  constructor(private DashboardService:DashboardService) {}

  ngOnInit(): void {
    this.DashboardService.close.subscribe(
      (data)=> {
        this.close = data;
      }
    )
    this.closesub = this.DashboardService.close.subscribe(
      (data)=> {
        this.close = data;
      }
    )
    this.showsub = this.DashboardService.show.subscribe(
      (data)=>{
        this.show = data;
      }
    )
    this.showDeletesub = this.DashboardService.Delete.subscribe(
      (data)=>{
        this.showDelete = data;
      }
    )
    this.messagesub = this.DashboardService.message.subscribe(
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
