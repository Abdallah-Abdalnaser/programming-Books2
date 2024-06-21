import { Component, OnInit } from '@angular/core';
import { MybooksService } from '../../services/mybooks.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent implements OnInit {
  pdfSrc:SafeResourceUrl="";
  fetching:boolean=true;
  constructor(private MybooksService:MybooksService , private route:ActivatedRoute , private pdf: DomSanitizer){}

  ngOnInit(): void {
    this.fetching = false;
    // scrollTo(0,0)
    this.route.params.subscribe(
      (data)=> {
        this.MybooksService.getBookById(Number(data['id'])).subscribe(
          (data:any) => {
            this.pdfSrc = this.pdf.bypassSecurityTrustResourceUrl(`http://zeyad200.runasp.net/${data.data.bookUrl}`);
            this.fetching = true;
          }
        )
      }
    )
  }
}
