import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from '../../environments/environment.development';
import { Observable, retry } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EmployeeServicesService implements OnInit {

//backend apis
  apiUrl="http://localhost:4000/users";
  empUrl="http://localhost:4000/user";

  /////////////////////////////////////////////////////
  signupurl="http://localhost:4000/signup"
  // loginurl="http://localhost:4000/login"
  authEmp="http://localhost:4000/authLogin"

  constructor(private http:HttpClient){}
  isLoggedIn(){
    return !!localStorage.getItem('token')
  }
  ngOnInit(): void {    
  }
  ///////////////////get all data backend
  getAllemployee():Observable<any>{
    return this.http.get(`${this.apiUrl}`)
  }
  //post data
  createdata(data:any):Observable<any>{
    console.log(data,'data created');    
    return this.http.post(`${this.empUrl}`,data);
  }
  //delete data
  deletedata(id:any):Observable<any>{
    const ids=id
    return this.http.delete(`${this.apiUrl}/${ids}`)
  }
  updateData(data:any,id:any):Observable<any>{
    const ids=id
    return this.http.put(`${this.empUrl}/${ids}`,data)
  }
  getSingledata(id:any):Observable<any>{
    const ids=id
    return this.http.get(`${this.empUrl}/${ids}`)
  }
//////////////////////////////////////////////////////////////////////////////////
//backend authorization services
  //signup service
  signupApi(signupdata:any):Observable<any>{
    return this.http.post(`${this.signupurl}`,signupdata)        
  }
  //view login service
  // loginApi(logindata:any){
  //   return this.http.get(`${this.loginurl}`,logindata)
  // }
  //authlogin service
  authUser(logindata:any){
    return this.http.post(`${this.authEmp}`,logindata)
  }
}

