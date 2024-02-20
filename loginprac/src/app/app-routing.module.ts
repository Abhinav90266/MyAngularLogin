import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login',loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)},
  {path:"signup",loadChildren:()=>import('./signup/signup.module').then(m=>m.SignupModule)},
  {path:"dashboard",loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:"add",loadChildren:()=>import('./add/add.module').then(m=>m.AddModule)},
  { path: "salaryDetails", loadChildren: () => import('./salary-details/salary-details.module').then(m => m.SalaryDetailsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
