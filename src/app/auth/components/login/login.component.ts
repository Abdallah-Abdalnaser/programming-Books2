import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faEyeSlash, IconDefinition ,faEye} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  type:string="password";
  passwordVisible = false;
  faEyeSlash:IconDefinition=faEyeSlash;
  faEye:IconDefinition=faEye;
  constructor(private AuthService:AuthService) {}
  onSubmit(form:NgForm) {
    this.AuthService.logIn(form.value).subscribe(
      (data:any)=> {
        console.log(data['data'])
      }
    )
  }



  showpassword() {
    if (this.type === "password") {
      this.type = "text";
      this.passwordVisible=!this.passwordVisible
    }else {
      this.type = "password";
      this.passwordVisible=!this.passwordVisible
    }
  }
}
