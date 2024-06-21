import { Component, OnInit, ViewChild } from '@angular/core';
import { MybooksService } from '../../../services/mybooks.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noteform',
  templateUrl: './noteform.component.html',
  styleUrl: './noteform.component.scss'
})
export class NoteformComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  Bookid:string='';

  constructor(private MybooksService: MybooksService , private router:ActivatedRoute) {}

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

    console.log({...form.value,bookId:Number(this.Bookid)});
    this.MybooksService.Addnote({...form.value,bookId:Number(this.Bookid)}).subscribe(
      (data)=> {
        this.MybooksService.refresh.next(true);
        this.MybooksService.close.next(true);
      }
    )
  }
}
