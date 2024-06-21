import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faEyeSlash, IconDefinition ,faEye} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';


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
  fetching:boolean=true;
  constructor(private AuthService:AuthService , private router:Router , private route:ActivatedRoute) {}


  onSubmit(form:NgForm) {
    this.fetching = false;
    this.AuthService.logIn(form.value).subscribe(
      (data:any)=> {
        localStorage.setItem("token",data.data);
        if (this.AuthService.getRole(localStorage.getItem('token'))  === 'User') {
          this.router.navigate(['../../user/home'],{relativeTo:this.route})
        } else if(this.AuthService.getRole(localStorage.getItem('token'))  === 'Admin') {
          this.router.navigate(['../../admin/users'],{relativeTo:this.route})
        }
        this.fetching = true;
      },
      (error) => {
        this.fetching = true;
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
