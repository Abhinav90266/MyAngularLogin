import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeServicesService } from '../employee-services.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { application } from 'express';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private http:HttpClient,private _employeeService:EmployeeServicesService,private formBuilder: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['',[Validators.required]],
      name:[''],
      token:['']
    })
  }

  // passwordMatch(){
  //   if(this.loginForm.value.password===Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")){
  //      this.passwordMatch
  //   }else{
  //     console.log(this.passwordMatch);      
  //   }
  // }

  login() {
    const tokendata=this.loginForm.value.name+this.loginForm.value.email+this.loginForm.value.password
  this.loginForm.value.token=tokendata
    this._employeeService.loginApi(this.loginForm.value).subscribe((res :any) => {
      const user = res.find((a: any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })
      if (user) {
        alert("login successfull");
        this.loginForm.reset();
        this.router.navigate(['dashboard'])
      }
      else {
        alert("user not found")
      }
    }, err => {
      alert("something wrong")
    })
    localStorage.setItem('logindata',JSON.stringify(this.loginForm.value))
    console.log(this.loginForm.value);
    
  }
}



// let apiKey="logindata"
    // const headers=new HttpHeaders({
    //   'Content-Type':'application/json',
    //   'Authorization':`Bearer ${apiKey}`
    // })
    // const requestOption={headers:headers};
    // this.http.get("http://localhost:3000/signup",requestOption).subscribe((res:any)=>{
    //   console.log(res);
    // })