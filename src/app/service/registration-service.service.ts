import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { text } from 'stream/consumers';



@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {
 
  fetchCategoryList():Observable<any> {
  return   this.http.get('http://localhost:8083/flipkart/product/allCategory',{responseType:'json'}).pipe(
      catchError(error=>{
        return throwError(error);
      })
    )
  }

 saveUrl="http://localhost:8083/flipkart/adminReg";
 loginUrl="http://localhost:8083/flipkart/adminLogin";
 addProdUrl="http://localhost:8083/flipkart/addProduct";
 viewCartUrl="http://localhost:8080/flipkart/viewcart";


  constructor(private http:HttpClient){

   
  }
<<<<<<< HEAD
=======
 
  addProduct(product: any,emailId:string):Observable<any> {
    return this.http.post(this.addProdUrl+'?emailId='+emailId,product,{responseType:'text'}).pipe(
      catchError(error=>{
        return throwError(error);
      })
    )
  }
>>>>>>> 033479a928c0051b18bb1a4bdd850fea245a7253

  public registerAdmin(data:any):Observable<any>{
    return this.http.post(`${this.saveUrl}`,data,{responseType:'text'});
  }

  public loginAdmin(emailId:string,password:string):Observable<any>{

    return this.http.get('http://localhost:8083/flipkart/adminLogin?emailId='+emailId+'&password='+password);
  }

  public addProducts(data:any):Observable<any>{
    return this.http.post(`${this.addProdUrl}`,data ,{responseType:'text'});
  }
 

  public viewCart(emailId:string):Observable<any>{
    return this.http.get(`${this.viewCartUrl}`,{responseType:'text'});
  }


}


