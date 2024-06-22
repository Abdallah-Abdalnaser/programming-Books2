import { Component, OnInit, ViewChild } from '@angular/core';
import { MybooksService } from '../../../services/mybooks.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-noteform',
  templateUrl: './noteform.component.html',
  styleUrl: './noteform.component.scss'
})
export class NoteformComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  Bookid:string='';

  constructor(private MybooksService: MybooksService , private router:ActivatedRoute ,private UserService:UserService) {}

  closeform() {
    this.MybooksService.close.next(true);
    this.form.reset();
  }

  ngOnInit(): void {
    this.MybooksService.Bookid.subscribe(
      (data)=>{
        this.Bookid = data;
      }
    )
  }


  onSubmit(form:NgForm) {
    this.MybooksService.Addnote({...form.value,bookId:Number(this.Bookid)}).subscribe(
      (data:any)=> {
        this.MybooksService.refresh.next(true);
        this.MybooksService.close.next(true);
        this.UserService.show.next(true);
        this.UserService.message.next(data.data)
        this.form.reset();
      }
    )
    this.UserService.show.next(false);
  }
}
