import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BooksComponent } from './components/books/books.component';
import { authCGuard } from './auth-c.guard';

const routes: Routes = [
  {path:'admin',component:DashboardComponent,canActivateChild:[authCGuard], children:[
    {path:"users",component:UsersComponent},
    {path:"statistic",component:StatisticComponent},
    {path:"categories",component:CategoriesComponent},
    {path:"Books",component:BooksComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
