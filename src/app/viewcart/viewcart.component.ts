import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-viewcart',
  templateUrl:'./viewcart.component.html',
  styleUrls: ['./viewcart.component.css'] // Fix typo here
})
export class ViewcartComponent implements OnInit {



  productCartList: any;
  emailId1: string = '';
  cartItems: any;

  addressForm: FormGroup;
  display: boolean = false;
  

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {

    this.addressForm = this.formBuilder.group({
      city: ['', Validators.required],
      street: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      zipCode: [0, Validators.required]
    });

  }

  ngOnInit(): void {

    this.ViewCart();
    this.checkout();
    this.closeRegistration();




  }

  ViewCart() {
    const customer = sessionStorage.getItem('customer');

    if (customer !== null) {
      const customerString = JSON.parse(customer);
      this.emailId1 = customerString.emailId;
    }

    this.http.get('http://localhost:8083/flipkart/viewcart?emailId=' + this.emailId1, { responseType: 'json' }).subscribe((data: any) => {
      this.cartItems = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }


  purchageQty = {
    productQty: 1
  };


  decrementQuantity(product: any, value: string) {
    console.log(product)
    if (value === 'minus' && product.productQty > 1) {
      product.productQty = product.productQty - 1;
    } else {


      product.productQty += 1;
    }
    const customer = sessionStorage.getItem('customer');

    if (customer != null) {
      const customerString = JSON.parse(customer);
      this.emailId1 = customerString.emailId;
    }
    console.log(product.productQty)
    this.purchageQty.productQty = product.productQty;

    this.http.post('http://localhost:8083/flipkart/addToCart?&productId=' + product.productId + '&emailId=' + this.emailId1, this.purchageQty, { responseType: 'text' }).subscribe((data: any) => {

      this.ngOnInit()
    }, error => {
      console.log(error);
    })

  }



  checkout() {
    
    const model=document.getElementById('myModal');
    if(model!=null){
      model.style.display='block';
    }
    this.display=true;
    
  }
  closeRegistration(){
    const model=document.getElementById('myModal');
    if(model!=null){
      model.style.display='none';
    }
  }
  onSubmit() {
    if (this.addressForm.valid) {
    
      console.log(this.addressForm.value);
    } else {
   
      console.log('Form is invalid');
    }
  }
  







}

