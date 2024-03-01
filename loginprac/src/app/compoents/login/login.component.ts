import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeServicesService } from '../../services/employee-services.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  login() {
    this._employeeService.authUser(this.loginForm.value).subscribe((res :any) => {
      console.log(res);
      this.loginForm.patchValue({token:res.token}); 
      if(res.rescode==200){
        localStorage.setItem('token',JSON.stringify(this.loginForm.value,this.loginForm.value.token))
        this.router.navigate(['dashboard']);
      }      
      else{
        alert("incorrect username or password")
      }
    }, err => {
      alert("something wrong",)
      console.log(err,'error');
      
    }) 
  }
}