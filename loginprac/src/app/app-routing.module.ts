import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dashguardGuard } from './dashguard.guard';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login',loadChildren:()=>import('./compoents/login/login.module').then(m=>m.LoginModule)},
  {path:"signup",loadChildren:()=>import('./compoents/signup/signup.module').then(m=>m.SignupModule)},
  {path:"dashboard",canActivate:[dashguardGuard],loadChildren:()=>import('./compoents/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:"add",canActivate:[dashguardGuard],loadChildren:()=>import('./compoents/add/add.module').then(m=>m.AddModule)},
  { path: "salaryDetails",canActivate:[dashguardGuard], loadChildren: () => import('./compoents/salary-details/salary-details.module').then(m => m.SalaryDetailsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
