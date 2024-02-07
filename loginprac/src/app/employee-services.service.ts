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
  addForm(employeeData:any){
    return this.http.post(this.employeeUrl,employeeData)
  }
  getEmployeeList(){
    return this.http.get(this.employeeUrl)
  }
  signupApi(signupdata:any){
    return this.http.post(this.signupurl,signupdata)
  }
  loginApi(logindata:any){
    return this.http.get(this.signupurl)
  }
  onDelete(id:any){
    return this.http.delete(`${this.employeeUrl}/${id}`)
  }
}

