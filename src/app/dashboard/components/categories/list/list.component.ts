import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  catigories:{id:number,name:string}[]=[];
  message:string='';
  constructor(private DashboardService:DashboardService) {}
  ngOnInit(): void {
    this.DashboardService.newCategory.subscribe(
      (data)=>{
        this.showCatiegory()
      }
    )
    this.DashboardService.getCategories().subscribe(
      (data:any)=> {
        this.catigories =data.data;
        this.DashboardService.fetching.next(true);
      }
    )
  }

  update(catigory:any) {
    this.DashboardService.Catigorytext.next(catigory)
    this.DashboardService.CatigoryaUpdate.next(true)
  }

  Delete(id:number) {
    this.DashboardService.DeleteCatigory(id).subscribe(
      (data:any)=> {
        this.message = data.message;
        this.showCatiegory();
      }
    )
  }

  showCatiegory() {
    this.DashboardService.getCategories().subscribe(
      (data:any)=> {
        this.catigories =data.data;
        this.DashboardService.fetching.next(true);
      }
    )
  }
}
