import { Component, OnInit,input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { parse } from 'path';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit {
  employeeForm!:FormGroup
  // employee:any=[];
  tempdata: any ;
  
  constructor(private formBuilder:FormBuilder,private _http:HttpClient,private router:Router){}
  
  ngOnInit(): void {
    this.employeeAddForm();
    // this.updatedata();
    this.getList();
  }
  getList(){
    this.tempdata =  localStorage.getItem(('value')) ? JSON.parse(localStorage.getItem(('value')) ?? '') : '';
    console.log("temp data : ", this.tempdata);
    this.employeeForm.patchValue({
         id: this.tempdata.id,
         name: this.tempdata.name,
         mobile: this.tempdata.mobile,
         salary: this.tempdata.salary
       });
  }
  employeeAddForm(){
    this.employeeForm=this.formBuilder.group({
      id:[''],
      name:[''],
      mobile:[''],
      salary:[''],
    })
  }
  
  addForm(){
    this._http.post<any>("http://localhost:3000/EmployeeDetails",this.employeeForm.value).subscribe(res=>{
      alert("registration succesfull");
      this.employeeForm.reset();
      this.getList();
    },err=>{
      alert("something went wrong")
    })
    }

    checkFormStatus() {
      this.tempdata ? this.updateform() : this.addForm();
    }
    updateform(){
     
    }
}
  
    


