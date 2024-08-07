import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faEye, faEyeSlash, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  type1:string="password";
  type2:string="password";
  passwordVisible = false;
  conpasswordVisible = false;
  faEyeSlash:IconDefinition=faEyeSlash;
  faEye:IconDefinition=faEye;

  constructor(private AuthService:AuthService ,private router:Router , private route:ActivatedRoute) {}

  onSubmit(form:NgForm) {
    console.log(form.value);
    this.AuthService.register(form.value).subscribe(
      (data:any)=> {
        this.AuthService.show.next(true);
        this.AuthService.message.next(data.message)
        this.router.navigate(['/auth/login'],{relativeTo:this.route})
      },
      (error) => {
        this.AuthService.Delete.next(true);
        this.AuthService.message.next(error.message)
      }
    )
    this.AuthService.show.next(false);
    this.AuthService.Delete.next(false);
  }

  showpassword() {
    if (this.type1 === "password") {
      this.type1 = "text";
      this.passwordVisible=!this.passwordVisible
    }else {
      this.type1 = "password";
      this.passwordVisible=!this.passwordVisible
    }
  }
  showConfirmPassword() {
    if (this.type2 === "password") {
      this.type2 = "text";
      this.conpasswordVisible=!this.conpasswordVisible
    }else {
      this.type2 = "password";
      this.conpasswordVisible=!this.conpasswordVisible
    }
  }
}
