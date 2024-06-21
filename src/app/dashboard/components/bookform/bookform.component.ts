import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.scss']
})
export class BookformComponent implements OnInit {
  categories: any[] = [];
  imageSrc: string = "../../../../assets/imgs/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg";
  @ViewChild('form') form!: NgForm;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    const bookData =
    {
      Title:"sfda",
      Description:"dfalskjfdshfj",
      Author:"sdfadsfasd",
      PublishTime:"10/2/2002",
      bookfile:"dsfadsfa",
      imagefile:"sfsdfasd",
      CategoryId:10001
  };

    this.dashboardService.addBook(bookData).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(`Error => ${error}`);
      }
    );
    this.getCategory();
  }

  onImageChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  closeform() {
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
    if (form.valid) {
      const bookData =
      {
        Title:"sfda",
        Description:"dfalskjfdshfj",
        Author:"sdfadsfasd",
        PublishTime:"10/2/2002",
        bookfile:"dsfadsfa",
        imagefile:"sfsdfasd",
        CategoryId:10001
    };

      this.dashboardService.addBook(bookData).subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(`Error => ${error}`);
        }
      );
    }
  }
}
