import { Component, OnInit } from '@angular/core';
import { EmployeeServicesService } from '../../services/employee-services.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-salary-details',
  templateUrl: './salary-details.component.html',
  styleUrl: './salary-details.component.css'
})
export class SalaryDetailsComponent implements OnInit {
  employees: any
  sal: any;
  salary: any;
  constructor(private _empService: EmployeeServicesService, private _http: HttpClient) { }
  ngOnInit(): void {
    // this.getList()
  }
  // getList() {
  //   this._empService.getEmployeeList().subscribe((res: any) => {
  //     this.employees = res;
  //   }, err => {
  //     alert("something went wrong")
  //   })
  //   localStorage.removeItem('value')
  // }
  empSalary(empSal: any) {
    console.log("this.employees", empSal)
    const data = this.employees.filter((res: any) => {
      if (res.id == empSal.target.value) {
        return res;
    }
    })
    console.log(data);
    
    alert(`Employee Name is: ${data[0].name} and Salary is: ${data[0].salary}`);
}
}
