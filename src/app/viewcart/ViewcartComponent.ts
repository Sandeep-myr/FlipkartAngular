import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HomepageComponent } from '../homepage/homepage.component';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css'] // Fix typo here
})
export class ViewcartComponent implements OnInit {

  productCartList: any;
  emailId1: string = '';
  cartItems: any;
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void
  {
    this.ViewCart();
  }

  ViewCart() {
    const customer = sessionStorage.getItem('customer');

    if (customer !== null) {
      const customerString = JSON.parse(customer);
      this.emailId1 = customerString.emailId;
    }

    this.http.get('http://localhost:8083/flipkart/viewcart?emailId=' + this.emailId1,{responseType:'json'}).subscribe((data: any) => {
      this.cartItems = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  incrementQuantity(product: any)
   {
    
 }
  decrementQuantity(product: any)
   {
  }

  calculateDiscountedPrice(product: any) {
    // Implement calculate discounted price logic here
  }
}
