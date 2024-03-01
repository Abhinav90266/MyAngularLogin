import { Component, OnInit, input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EmployeeServicesService } from '../../services/employee-services.service';

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
    // this.updateData();
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

  empSubmit() {
    let payload = {
      id: (this.employeeForm.value?.id)?.toString(),
      name: this.employeeForm.value?.name,
      mobile: this.employeeForm.value?.mobile,
      salary: this.employeeForm.value?.salary,
    }
    console.log(payload);
    this._employeeService.createdata(payload).subscribe((res) => {
      // console.log(res,'data added successfull');      
      alert("registration succesfull");      
      this.employeeForm.reset();
      // this.getList()
    }, err => {
      alert("something went wrong")
    })
  }
  empUpdate() {

    this._employeeService.updateData(this.employeeForm.value,this.employeeForm.value?.id).subscribe((res)=>{
      console.log(res);
      this.employeeForm.reset();
    })
  }
  checkFormStatus() {
    this.tempdata ? this.empUpdate() : this.empSubmit();
  }
  locallogout(){
    localStorage.removeItem('value')
  }
}




