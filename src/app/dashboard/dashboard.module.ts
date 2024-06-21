import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UsersComponent } from './components/users/users.component';
import { UserlistComponent } from './components/users/userlist/userlist.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BooksComponent } from './components/books/books.component';
import { ListComponent } from './components/categories/list/list.component';
import { FormsModule } from '@angular/forms';
import { ListBookComponent } from './components/books/list/list.component';
import { BookformComponent } from './components/bookform/bookform.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    UsersComponent,
    UserlistComponent,
    StatisticComponent,
    CategoriesComponent,
    BooksComponent,
    ListComponent,
    ListBookComponent,
    BookformComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule,
    FormsModule,
    NgxPaginationModule
  ],
})
export class DashboardModule { }
