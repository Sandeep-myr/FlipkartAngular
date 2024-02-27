import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { error } from 'console';
@Injectable({
  providedIn: 'root',
})
export class CustomerApiService 
{
 
   registerUrl = 'http://localhost:8083/flipkart/customerRegistration';
   loginUrl='http://localhost:8083/flipkart/customerLogin';    
  passwordchangeUrl="http://localhost:8083/flipkart/password/change"
   constructor(private http:HttpClient){}

  public RegisterCustomer(data: any): Observable<any> 
  {
    return this.http.post(this.registerUrl,data,{ responseType: 'text' });
  }

  public LoginCustomer(mail:any, pass : any,mobileNumber:any):Observable<any>{

    if(mail==null){
      return this.http.post(this.loginUrl+`?mobileNumber=${mobileNumber}&password=${pass}`,{ responseType: 'json' }) .pipe(
        catchError(error => {
          console.error('An error occurred:', error);
          return throwError(error); 
        })
      );
    }
    else{
      return this.http.post(this.loginUrl+`?emailId=${mail}&password=${pass}`,{ responseType: 'json' }).pipe(
        catchError(error => {
          console.error('An error occurred:', error);
          return throwError(error); 
        })
      );
  
    }



 
  }



  changePassword(email: any, oldPassword: any, newPassword: any):Observable<string> {
    console.log(email,oldPassword,newPassword)
    const params = {
      emailId: email,
      oldPassword: oldPassword,
      newPassword: newPassword
    };
  return this.http.post(this.passwordchangeUrl,params,{responseType:'text'}).pipe
  (
    catchError(error=>{
      console.log(error)
      return throwError(error);
    })
  )
  }




}

