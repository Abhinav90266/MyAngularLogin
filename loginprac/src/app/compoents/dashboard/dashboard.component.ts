import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EmployeeServicesService } from '../../services/employee-services.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  host: { ngSkipHydration: 'true' }
})
export class DashboardComponent implements OnInit {

  //pagination
  currPage=1;
  //searching
  SearchText:any;
  //sorting
  reverse:boolean=false;
  key:any='id'
  
  employeeForm!: FormGroup
  employees: any[] = [];
  employeeId: any;

  constructor(  private _employeeService: EmployeeServicesService) {
  }

  ngOnInit(): void {
    // this.getList();
    this.getAllData();
    this._employeeService.getAllemployee().subscribe((res:any)=>{
      console.log('Get all data',res);      
      this.employees=res.data;
    })
  }

  updateform(employee: any, i: any) {
    
    localStorage.setItem('value', JSON.stringify(employee, i))
  }
  deleteId(id:any) {
    this._employeeService.deletedata(id).subscribe((res:any) => {
      console.log(res,'data deleted');
      this.getAllData();
    })
  }
  getAllData(){
    this._employeeService.getAllemployee().subscribe((res:any)=>{
      console.log('Get all data',res);      
      this.employees=res.data;
    })
  }

  ondestroy() {
    localStorage.removeItem('value')
  }
  searching(){
    if(this.SearchText){
      this.currPage=1
    }
  }
  sort(salary:any){
    if(this.key===salary){
      this.reverse=!this.reverse
    }else{
      this.key=salary;
      console.log(this.key);      
    }
  }
  locallogout(){
    localStorage.removeItem('token')
  }
}





