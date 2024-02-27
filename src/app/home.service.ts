import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  fetchSpecificProductUrl:string="http://localhost:8080/flipkart/productById";
  constructor(private http:HttpClient) { }

  fetchSpecificProduct(productid:any):Observable<any>{
          return this.http.get(this.fetchSpecificProductUrl + '?productId=' + productid, { responseType: 'json' });
  }


}
