import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { adminauthGuard } from './adminauth.guard';
import { userauthGuard } from './userauth.guard';

const routes: Routes = [
  {path:'user',component:UserComponent ,canActivate:[userauthGuard]},
  {path:'auth',component:AuthComponent},
  {path:'admin',component:DashboardComponent ,canActivate:[adminauthGuard]},
  {path:"",redirectTo:"auth/login",pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
