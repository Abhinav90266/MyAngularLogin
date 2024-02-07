import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeServicesService } from '../employee-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private _employeeService:EmployeeServicesService,private formBuilder: FormBuilder, private _http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  login() {
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
  }
}
