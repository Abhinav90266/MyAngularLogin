import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServicesService implements OnInit {

  signupurl="http://localhost:3000/signup"
  employeeUrl="http://localhost:3500/EmpDetails"
  constructor(private http:HttpClient){}
  ngOnInit(): void {    
  }
  signupApi(signupdata:any){
    return this.http.post(this.signupurl,signupdata)    
  }
  loginApi(logindata:any){
    return this.http.get(this.signupurl)
  }
  addForm(employeeData:any){
    return this.http.post(this.employeeUrl,employeeData)
  }
  getEmployeeList(){
    return this.http.get(this.employeeUrl)
  }
  onDelete(id:any){
    return this.http.delete(`${this.employeeUrl}/${id}`)
  }
  getEmployeeId(empSalary:any){
    return this.http.get(this.employeeUrl,empSalary)
  }
  //update component services
  getEmpid(id:any){
    return this.http.get(`${this.employeeUrl}/${id}`)
  }
  updatedata(id:any,data:any){
    return this.http.put(`${this.employeeUrl}/${id}`,data)
  }
  updatedataform(id:any){
    return this.http.post(`${this.employeeUrl}/${id}`,id)
  }
}

