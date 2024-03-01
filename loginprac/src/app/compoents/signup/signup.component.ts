import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeServicesService } from '../../services/employee-services.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup
  constructor(private _employeeService: EmployeeServicesService, private formBuilder: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$")]],
    })
  }

  signUp() {
    this._employeeService.signupApi(this.signupForm.value).subscribe((res) => {
      alert("Registration Succesfull")
      this.signupForm.reset();
      this.router.navigate(['login'])
    }, err => {
      alert("something wrong")
    })
  }
}
