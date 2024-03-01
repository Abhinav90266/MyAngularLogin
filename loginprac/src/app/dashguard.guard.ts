import { Injectable } from '@angular/core';
import {CanActivate,Router} from '@angular/router';
import { EmployeeServicesService } from './services/employee-services.service';

@Injectable(
  {providedIn:'root'}
)
export class dashguardGuard implements CanActivate {
  constructor(private auth: EmployeeServicesService,private router:Router) {} 
  canActivate() {
    if(this.auth.isLoggedIn()){
      return true
    }
    this.router.navigate(['login'])
      return true
  }
}
