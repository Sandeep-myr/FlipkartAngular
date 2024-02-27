import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CustomerApiService 
{
   registerUrl = 'http://localhost:8080/flipkart/customerRegistration';
   loginUrl='http://localhost:8080/flipkart/customerLogin';    
  
   constructor(private http:HttpClient){}

  public RegisterCustomer(data: any): Observable<any> 
  {
    return this.http.post(this.registerUrl,data,{ responseType: 'text' });
  }

  public LoginCustomer(mail:any, pass : any):Observable<any>{

    return this.http.post(this.loginUrl+`?emailId=${mail}&password=${pass}`,{ responseType: 'json' });
  }








}

