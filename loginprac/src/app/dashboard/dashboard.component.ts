import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EmployeeServicesService } from '../employee-services.service';

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

  
  employeeForm!: FormGroup
  employees: any[] = [];
  update: any;
  i: any
  employee: any;
  employeeId: any;

  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router, private _employeeService: EmployeeServicesService) {
  }

  ngOnInit(): void {
    this.getList();
    this.ondestroy();
  }

  getList() {
    this._employeeService.getEmployeeList().subscribe((res: any) => {
      this.employees = res;
    }, err => {
      alert("something went wrong")
    })
  }
  updateform(employee: any, i: any) {
    localStorage.setItem('value', JSON.stringify(employee, i))
  }

  onDelete() {
    this._employeeService.onDelete(this.employeeId).subscribe((res) => {
      this.getList()
    })
  }
  //modal update
  onModalDelete(idData: any) {
    this.employeeId = idData;
  }
  ondestroy() {
    localStorage.removeItem('value')
  }
  searchInput(){
    if (this.SearchText) {
      this.currPage=1;
    }
  }
}





