import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { json } from 'stream/consumers';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  employeeForm!:FormGroup
employees: any[]=[];
  update: any;
  
  i:any
  employee: any;
  // const employeeId = employee.id;
  constructor(private formBuilder:FormBuilder,private _http:HttpClient,private router:Router){
    // this.employees=[];
  }
  
  ngOnInit(): void {
    this.getList();
    this.ondestroy()
    // this.updateform
  }


  getList(){
    this._http.get<any>("http://localhost:3000/EmployeeDetails").subscribe((res: any)=>{
      this.employees=res;
      // this.employeeForm.reset();
    },err=>{
      alert("something went wrong")
    })
  }
  updateform(employee: any,i:any){
    localStorage.setItem('value',JSON.stringify(employee,i))
    console.log(employee,i);
}
ondestroy(){
  localStorage.removeItem('value')
}
onDelete(employee: any, index: number): void {
  const employeeId = employee.id;
  if(confirm("Are You You want to delete"))
  this._http.delete(`http://localhost:3000/EmployeeDetails/${employeeId}`).subscribe(
    () => {
      this.employees.splice(index, 1); 
    },
    (error) => {
      console.error('Error deleting employee:', error);
    }
  );
}
}

  




