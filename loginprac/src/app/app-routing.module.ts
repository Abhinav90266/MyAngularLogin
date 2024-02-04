import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
// import { AddButtonComponent } from './add-button/add-button.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"add",component:AddComponent}
  // {path:"add-button",component:AddButtonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
