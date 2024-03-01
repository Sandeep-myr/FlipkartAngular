import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { error } from 'console';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';

import { RegistrationServiceService } from '../service/registration-service.service';

interface Product{
  productName: string;
  brandName: string;
  description: string;
  imageUrl: string;
  productQty: number;
  productPrice: number;
  totalProductPurchasePrice: number;
  discountAmount: number;
  afterDiscountAmount: number;
  sellerName: string;
  orderId: number;
}

interface Address {
  city: string;
  street: string;
  state: string;
  country: string;
  zipCode: number;
}

interface AddToCartResponse {
  productCartList: Product[];
  totalPayableAmount: number;
  totalSaving: number;
  totalBillAmount: number;
}

interface Order {
  orderDate: string;
  addToCartResponse: AddToCartResponse;
  addressReq: Address;
}
@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
  
})
export class OrderHistoryComponent implements OnInit {
  orderDetails:any;

  review:any;
  emailId: any;
  emailId1:any;

constructor( private http:HttpClient ,private sevice:RegistrationServiceService){
}

ngOnInit(): void {
 this.fetchOder();
}


fetchOder(){
  const customer = sessionStorage.getItem('customer');
  
    if(customer!=null){
    const customerString = JSON.parse(customer);
     this.emailId=customerString.emailId;
    }  
  
  this.http.get('http://localhost:8083/flipkart/orderHistory?emailId='+this.emailId,{responseType:'json'}).subscribe(
    (data:any)=>{
      
     this.orderDetails = data;
      console.log(this.orderDetails);
     
    },
    (error)=>{
      console.error('error fetching orders:',error);
    }
  );
}

reviews()
{
  this.http.post('http://localhost:8080/flipkart/order/review?emailId='+this.emailId1,{responseType:'json'}).subscribe(
    (data:any)=>{
      alert('your history');
      this.review=data;
      console.log('reviews');
      
    },
    (error)=>{
      console.error('error fetching',error);
    }
  );


}

}