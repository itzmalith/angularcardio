import { Injectable } from '@angular/core';
import {HttpClient ,  HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  
  private baseURL = "https://cadionodebackend.onrender.com";


  constructor(private http:HttpClient) { }

  apiUrl = 'https://cadionodebackend.onrender.com/user';



    // Function to perform a POST request for signup
  signup(data: any): Observable<any> {
  
    return this.http.post(`${this.baseURL}/signup`, data );
  }

  // Function to perform a POST request for login
  login(data: any): Observable<any> {
   
    return this.http.post(`${this.baseURL}/logins`, data);
  }

 





 // get all data
 
//  getALLData():Observable<any>{
  
//   return this.http.get(`${this.apiUrl}`);

//  }
 
//  createData(data:any): Observable<any>{

//   console.log(data,"createapi");

//   return this.http.post(`${this.apiUrl}`,data)
// }





}
