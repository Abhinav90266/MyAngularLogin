import { Component, OnInit, input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EmployeeServicesService } from '../employee-services.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit {
  employeeForm!: FormGroup
  tempdata: any;
  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router, private _employeeService: EmployeeServicesService) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      id: '',
      name: '',
      mobile: '',
      salary: '',
    })
    this.getList();
    this.updateData();
  }
  getList() {
    this.tempdata = localStorage.getItem(('value')) ? JSON.parse(localStorage.getItem(('value')) ?? '') : '';
    this.employeeForm.patchValue({
      id: this.tempdata.id,
      name: this.tempdata.name,
      mobile: this.tempdata.mobile,
      salary: this.tempdata.salary
    });

    console.log(this.tempdata);

  }

  addForm() {
    let payload = {
      id: (this.employeeForm.value?.id)?.toString(),
      name: this.employeeForm.value?.name,
      mobile: this.employeeForm.value?.mobile,
      salary: this.employeeForm.value?.salary,
    }
    console.log(payload);
    this._employeeService.addForm(payload).subscribe(res => {
      alert("registration succesfull");
      this.employeeForm.reset();
      this.getList();
    }, err => {
      alert("something went wrong")
    })
  }
  updateData() {
    console.log(this.tempdata.id);
    this._employeeService.getEmpid(this.tempdata.id).subscribe((res) => {
      console.log(res);
      this.employeeForm = this.formBuilder.group({
        id: this.employeeForm.value.id,
        name: this.employeeForm.value.name,
        mobile: this.employeeForm.value.mobile,
        salary: this.employeeForm.value.salary,
      })
    })
    this._employeeService.updatedata(this.tempdata.id, this.employeeForm.value).subscribe((res) => {
      console.log(res);
    })
  }
  checkFormStatus() {
    this.tempdata ? this.updateData() : this.addForm();
  }
}




