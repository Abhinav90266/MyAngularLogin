import { HttpClient } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeServicesService } from '../employee-services.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  signupForm!:FormGroup
  constructor(private _employeeService:EmployeeServicesService,private formBuilder:FormBuilder,private _http:HttpClient,private router:Router){}
  
  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      name:[''],
      email:[''],
      password:['']
    })
  }
signUp(){
  this._employeeService.signupApi(this.signupForm.value).subscribe((res)=>{
    alert("Registration Succesfull")
    this.signupForm.reset();
    this.router.navigate(['login'])
  },err=>{
    alert("something wrong")
  })
}
}
