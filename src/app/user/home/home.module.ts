import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CatigoresComponent } from './components/home/catigores/catigores.component';
import { UserRoutingModule } from '../user-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { register } from 'swiper/element/bundle';
register();

@NgModule({
  declarations: [
    HomeComponent,
    CatigoresComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    UserRoutingModule,
    NgxPaginationModule,
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomeModule { }
