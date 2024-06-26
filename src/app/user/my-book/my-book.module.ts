import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookinfoComponent } from './components/bookinfo/bookinfo.component';
import { MyBookComponent } from './components/my-book/my-book.component';
import { BookDetailsComponent } from './components/bookinfo/book-details/book-details.component';
import { InfoComponent } from './components/bookinfo/info/info.component';
import { RecommendComponent } from './components/bookinfo/recommend/recommend.component';
import { ScheduleReadingComponent } from './components/bookinfo/schedule-reading/schedule-reading.component';
import { YourBookComponent } from './components/my-book/your-book/your-book.component';
import { register } from 'swiper/element/bundle';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserRoutingModule } from '../user-routing.module';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { BookComponent } from './components/book/book.component';
import { NotesComponent } from './components/book/notes/notes.component';
import { NoteformComponent } from './components/book/noteform/noteform.component';
register();


@NgModule({
  declarations: [
    BookinfoComponent,
    MyBookComponent,
    BookDetailsComponent,
    InfoComponent,
    RecommendComponent,
    ScheduleReadingComponent,
    YourBookComponent,
    BookComponent,
    NotesComponent,
    NoteformComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    UserRoutingModule,
    CalendarModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports:[
    NoteformComponent
  ]
})
export class MyBookModule { }
