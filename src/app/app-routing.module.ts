import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AuthComponent } from './auth/auth.component';
import { AdminModule } from './admin/admin.module';

const routes: Routes = [
  {path:'user',component:UserComponent},
  {path:'auth',component:AuthComponent},
  {path:'admin',component:AdminModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
