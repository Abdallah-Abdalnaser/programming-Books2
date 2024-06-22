import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent  implements OnInit{
  @ViewChild('form')Form!:NgForm;
  fetching:boolean=true;
  message:string='';
  update:boolean=false;
  catigoryupdate!:any;
  constructor(private DashboardService:DashboardService){}
  ngOnInit(): void {
    this.DashboardService.Catigorytext.subscribe(
      (data:any)=> {
        this.Form.setValue({name:data.name})
        this.catigoryupdate = data;
      }
    )
    this.DashboardService.CatigoryaUpdate.subscribe (
      (data)=> {
        this.update = data;
      }
    )
    this.fetching = false;
    this.DashboardService.fetching.subscribe(
      (data) => {
        this.fetching = data
      }
    )
  }

  onSubmit(form:NgForm) {
    if (this.update === true) {
      this.DashboardService.updateCatigory({...this.catigoryupdate , name:form.value.name}).subscribe(
        (data:any)=> {
          this.message = data.data;
          this.DashboardService.newCategory.next(data);
          this.DashboardService.show.next(true);
          this.DashboardService.message.next(data.data)
          form.reset();
          this.update = false;
        }
      )
      this.DashboardService.show.next(false);
    }else {
      this.DashboardService.addCatigory(form.value).subscribe(
        (data:any) => {
          form.reset();
          this.message = data.data;
          this.DashboardService.newCategory.next(data);
          this.DashboardService.show.next(true);
          this.DashboardService.message.next(data.data)
          this.update = false;
        }
      )
      this.DashboardService.show.next(false);
    }
  }
}
