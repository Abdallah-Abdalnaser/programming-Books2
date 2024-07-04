import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faPlus, IconDefinition , faPaperPlane , faFileAlt , faQuestionCircle , faLanguage , faStickyNote , faRobot} from '@fortawesome/free-solid-svg-icons';
import { MybooksService } from '../../../services/mybooks.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent implements OnInit{
  @ViewChild('text') text!:ElementRef;
  faplus:IconDefinition = faPlus;
  faPaperPlane:IconDefinition = faPaperPlane;
  faFileAlt:IconDefinition = faFileAlt;
  faQuestionCircle:IconDefinition = faQuestionCircle;
  faLanguage:IconDefinition = faLanguage;
  faStickyNote:IconDefinition = faStickyNote;
  faRobot:IconDefinition = faRobot;
  show:boolean=false;
  Summarize:string = '';
  fetching:boolean=true;
  notes:any[]=[];
  Bookid:string='';
  showNotes:boolean = false;
  showquestion:boolean = false;
  QA:any[]=[];
  constructor(private MybooksService:MybooksService ,private router:ActivatedRoute , private UserService:UserService) {}

  ngOnInit(): void {
    this.MybooksService.refresh.subscribe(
      (data)=> {
        if (data === true) {
          this.MybooksService.showNotes(Number(this.Bookid)).subscribe(
            (data:any)=> {
              this.QA = [];
              this.notes = data.data;
              this.fetching = true
            }
          )
        }
      }
    )
    this.MybooksService.refresh.next(false);
    this.router.params.subscribe(
      (data)=> {
        this.Bookid = data['id']
        this.MybooksService.Bookid.next(this.Bookid);
      }
    )
  }

  submit(form:NgForm) {
    this.QA =[]
    this.fetching = false
    this.text.nativeElement.value = '';
    this.MybooksService.getsummarize(form.value).subscribe(
      (data:any) => {
        this.Summarize =data.summary;
        this.fetching = true;
      }
    )
  }

  submitQ(form:NgForm) {
    this.Summarize ='';
    this.showquestion = !this.showquestion;
    this.fetching = false;
    this.showNotes = false;
    this.text.nativeElement.value = '';
    this.MybooksService.QuestionAswer(form.value).subscribe(
      (data:any)=> {
        this.notes= [];
        this.QA = data;
        this.fetching = true;
        console.log(this.QA);
      }
    )
  }

  submitL(form:NgForm) {
    this.QA =[];
    this.fetching = false
    this.showNotes = false;
    this.text.nativeElement.value = '';
    this.MybooksService.translator(form.value).subscribe(
      (data:any)=> {
        this.notes= [];
        this.Summarize = data.translated_text;
        this.fetching = true;
      }
    )
  }

  submitG(form:NgForm) {
    this.QA =[]
    this.fetching = false
    this.showNotes = false;
    this.text.nativeElement.value = '';
    this.MybooksService.gpt({prompt:form.value.text,num_token:50,num_beam:1,do:1}).subscribe(
      (data:any)=> {
        this.notes= [];
        this.Summarize = data.response[0].split('[/INST]')[1];
        this.fetching = true;
      }
    )
  }

  shownotes() {
    this.Summarize ='';
    this.showNotes = !this.showNotes;
    this.fetching = false;
    this.getnotes();
  }

  deleteNote(id:number) {
    this.MybooksService.deleteNotes(id,Number(this.Bookid)).subscribe(
      (data:any)=> {
        this.getnotes();
        this.UserService.Delete.next(true);
        this.UserService.message.next(data.data)
      }
    )
    this.UserService.Delete.next(false);
  }

  open() {
    this.MybooksService.close.next(false);
  }

  getnotes() {
    this.MybooksService.showNotes(Number(this.Bookid)).subscribe(
      (data:any)=> {
        this.QA = [];
        this.notes = data.data;
        this.fetching = true
      }
    )
  }
}
