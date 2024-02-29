import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  {catchError} from 'rxjs/operators'
import { Observable,  throwError } from 'rxjs';
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

 saveUrl="http://localhost:8083/flipkart/adminreg";
 loginUrl="http://localhost:8083/flipkart/adminLogin";
 addProdUrl="http://localhost:8083/flipkart/addProduct";
 viewCartUrl="http://localhost:8083/flipkart/viewcart";
 addtoCartUrl="http://localhost:8083/flipkart/addToCart";



  constructor(private http:HttpClient)
  {

   
  }
 
  addProduct(product: any,emailId:string):Observable<any> {
    return this.http.post(this.addProdUrl+'?emailId='+emailId,product,{responseType:'text'}).pipe(
      catchError(error=>{
        return throwError(error);
      })
    )
  }

  public registerAdmin(data:any):Observable<any>{
    return this.http.post(`${this.saveUrl}`,data,{responseType:'text'});
  }

  public loginAdmin(emailId:string,password:string):Observable<any>{

    return this.http.get('http://localhost:8083/flipkart/adminLogin?emailId='+emailId+'&password='+password);
  }

  public addProducts(data:any):Observable<any>{
    return this.http.post(`${this.addProdUrl}`,data ,{responseType:'text'});
  }
  // public addToCart(emailId:string,productId:number) : Observable<any>{

  //   return this.http.post('http://localhost:8083/flipkart/addToCart?emailId='+emailId+'&productId='+productId);
  // }

public addToCart(emailId:string,productId:number):Observable<any>
{
  let params=new HttpParams()
  .set('emailId',emailId)
  .set('productId',productId)
  return this.http.post('http://localhost:8083/flipkart/addToCart',{},{params});
}
public viewCart(emailId:string):Observable<any>
{
  return this.http.get('http://localhost:8080/flipkart/viewcart?emailId'+emailId);
}


}


