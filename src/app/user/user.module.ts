import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { LayoutModule } from './layout/layout.module';
import { MyBookModule } from './my-book/my-book.module';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    LayoutModule,
    MyBookModule,
    HomeModule
  ]
})
export class UserModule { }
