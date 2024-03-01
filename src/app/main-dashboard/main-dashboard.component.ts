import { Component, Injectable, OnInit } from '@angular/core';
import { RegistrationServiceService } from '../service/registration-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { error } from 'console';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.css',
})

export class MainDashboardComponent {
selectedCategory: any;
goToCart() {

}
logout() {
  console.log('ghj')
  sessionStorage.removeItem('admin');
  this.router.navigate(['/']);

}

  categoryChoose: any;
  categoryName: any;
  open: boolean = false;
  categoryLists: any;
  category: any;

  openForm() {
    this.categoryListName();
    this.open = true;
  }

constructor(
    private service: RegistrationServiceService,
    private router: Router,
  
  ) { }

  
product = {
    categoryList:[{
    categoryName: '',
    productList:[
    {
      productName: '',
      brandName: '',
      productQty: 0,
      productPrice: 0,
      discountPercentage: 0,
      description: '',
      imageUrl: '',
    }],
  }]
  };



  //--------------------------------------------------------------------------------
  //adding products

  saveProduct() {
    const adminString = sessionStorage.getItem('admin');
    let admin;
    
    if (adminString !== null) {
        admin = JSON.parse(adminString);
    }
    if(this.selectedCategory !== 'other'){
      this.product.categoryList[0].categoryName=this.selectedCategory;
    }
    let emailId=admin.adminContacts[0].emailId;
    console.log(this.product)
     this.service.addProduct(this.product,emailId).subscribe(
      (data:any) => {
        console.log(data);

        return this.router.navigate(['./main-dashboard']);
      },
      error =>{
        console.log(error)
      } 
    );
  }

  //-------------------------------------------------------------------------------------
  categoryListName() {
    this.service.fetchCategoryList().subscribe((data: any) => {
      this.categoryLists = data
    }, error => {
      console.log(error)
    })
  }

  //---------------------------------------------------------------------------------------





}
