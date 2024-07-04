import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { NgForm } from '@angular/forms';
import { title } from 'process';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.scss']
})
export class BookformComponent implements OnInit , OnDestroy {
  categories: any[] = [];
  imageSrc: string = "../../../../assets/imgs/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg";
  imagepath!:any;
  bookpath!:any;
  fetching:boolean=true;
  checkState!:boolean;
  bookid:any;
  bookinfo:any;
  disgetBookById!:Subscription;
  disBookid!:Subscription;
  disudateBook!:Subscription;
  @ViewChild('form') form!: NgForm;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.disBookid = this.dashboardService.Bookid.subscribe(
      (data)=> {
        this.bookid = data;
      }
    )
    this.disudateBook = this.dashboardService.udateBook.subscribe(
      (data) => {
        this.checkState = data;
      }
    )
    this.getCategory();
  }

  onImageChange(event: any): void {
    this.imagepath = event.target.files[0];
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  onBookpathchange(event:any) {
    this.bookpath = event.target.files[0];
  }

  closeform() {
    this.dashboardService.udateBook.next(false);
    this.dashboardService.close.next(true);
    this.form.reset();
    this.imageSrc = "../../../../assets/imgs/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg";
  }

  getCategory() {
    this.dashboardService.getCategories().subscribe(
      (data: any) => {
        this.categories = data.data;
      },
      (error) => {
        console.log(`Error fetching categories: ${error}`);
      }
    );
  }

  onSubmit(form: NgForm) {
    this.fetching = false;
    const formData = new FormData();
    formData.append('Title', form.value.Title);
    formData.append('Description', form.value.Description);
    formData.append('Author', form.value.Author);
    formData.append('PublishTime', new Date(form.value.PublishTime).toISOString());
    formData.append('CategoryId', form.value.CategoryId);
    formData.append('bookfile', this.bookpath, this.bookpath.name);
    formData.append('imagefile', this.imagepath, this.imagepath.name);

    if (this.checkState === true) {
      formData.append('id', this.bookid);
      this.dashboardService.updateBook(formData, this.bookid).subscribe(
        (data:any)=> {
          form.reset();
          this.closeform();
          this.dashboardService.newBook.next(true);
          this.fetching = true;
          this.dashboardService.show.next(true);
          this.dashboardService.message.next(data.data)
        },
        (error) => {
          console.log(`Error => ${error}`);
          this.fetching = true;
        }
      )
      this.dashboardService.show.next(false);
    } else {
      this.dashboardService.addBook(formData).subscribe(
        (data:any) => {
          form.reset();
          this.closeform();
          this.dashboardService.newBook.next(true);
          this.fetching = true;
          this.dashboardService.show.next(true);
          this.dashboardService.message.next(data.data);
        },
        (error) => {
          console.log(`Error => ${error}`);
          this.fetching = true;
        },
      );
      this.dashboardService.show.next(false);
    }
  }

  ngOnDestroy(): void {
    this.disgetBookById.unsubscribe();
    this.disBookid.unsubscribe();
    this.disudateBook.unsubscribe();
  }
}
