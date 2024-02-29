import { HttpClient } from '@angular/common/http';
import { Component, Injectable, Injector, OnInit, Output } from '@angular/core';
import { SpecificProductComponent } from '../specific-product/specific-product.component';
import { Router } from '@angular/router';
import { error } from 'console';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {

categories: any;
product:any[]=[];

purchageQty={
  productQty:1
};
  

  public products: any;
 

  constructor(private http: HttpClient, private specificProduct: SpecificProductComponent, private router: Router) { }
  ngOnInit(): void {
    this.http.get('http://localhost:8083/flipkart/all/product', { responseType: 'json' }).subscribe((data: any) => {
      this.products = data;
      

    }, error => {
      console.log(error);
    });

    this.http.get('http://localhost:8083/flipkart/product/allCategory',{responseType:'json'}).subscribe((data:any)=>{
      this.categories=data;
    })
    

  }
 
  showDropdown: boolean = false;

  // Method to toggle the display of the dropdown
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

status:boolean=false;
msg:string='';
  fetchSpecificCategoryProduct(choosedCategory: any) {
    this.http.get('http://localhost:8083/flipkart/searchByCategoryName?category='+choosedCategory,{responseType:'json'}).subscribe((data:any)=>{
      this.products=data;
    },error=>{
      console.log(error);
    })
 }
    
      message:any;
      statusupdate:boolean=false;
emailId1:string='';
    AddToCart(product:any){
    const customer = sessionStorage.getItem('customer');
  
    if(customer!=null){
    const customerString = JSON.parse(customer);
     this.emailId1=customerString.emailId;
    }  
  
    this.http.post('http://localhost:8083/flipkart/addToCart?&productId='+product.productId+'&emailId='+this.emailId1,this.purchageQty,{responseType:'text'}).subscribe((data:any)=>{
        this.product=data;
      this.statusupdate=true;
      this.message=data;
 
      setTimeout(()=>{
        this.statusupdate=false;
      },5000)
      },error =>{
        console.log(error);
      })
    }


  

}
