import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'user',component:UserComponent},
  {path:'auth',component:AuthComponent},
  {path:'admin',component:AdminComponent},
  // {path:"**",redirectTo:"admin"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
