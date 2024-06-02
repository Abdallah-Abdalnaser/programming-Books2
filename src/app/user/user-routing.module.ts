import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { MyBookComponent } from './my-book/components/my-book/my-book.component';
import { BookinfoComponent } from './my-book/components/bookinfo/bookinfo.component';
import { BookDetailsComponent } from './my-book/components/bookinfo/book-details/book-details.component';
import { ScheduleReadingComponent } from './my-book/components/bookinfo/schedule-reading/schedule-reading.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {path:'user',component:UserComponent,children:[
    {path:"home",component:HomeComponent},
    {path:"myBook",component:MyBookComponent},
    {path:"Book/:id",component:BookinfoComponent,children:[
      {path:'detail',component:BookDetailsComponent},
      {path:'Schedule',component:ScheduleReadingComponent}
    ]},
  ]},
  {path:"",redirectTo:"user/home",pathMatch:"full"},
  {path:"**",redirectTo:"user/home"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
