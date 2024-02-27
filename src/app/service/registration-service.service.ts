import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

 saveUrl="http://localhost:8080/flipkart/adminreg";
 loginUrl="http://localhost:8080/flipkart/adminLogin";
 
 addProdUrl="http://localhost:8080/flipkart/addProduct";


  constructor(private http:HttpClient){

   
  }
  public registerAdmin(data:any):Observable<any>{
    return this.http.post(`${this.saveUrl}`,data,{responseType:'text'});
  }
  public loginAdmin(emailId:string,password:string):Observable<any>{

    return this.http.get('http://localhost:8080/flipkart/adminLogin?emailId='+emailId+'&password='+password);
  }
  public addProducts(data:any):Observable<any>{
    return this.http.post(`${this.addProdUrl}`,data);
  }


}


