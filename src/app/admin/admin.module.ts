import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { BooksComponent } from './components/books/books.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AdminComponent,
    SideBarComponent,
    BooksComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule
  ]
})
export class AdminModule { }
