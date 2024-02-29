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
 
  // fetchSpecific(productId: any) {
  //   this.specificProduct.fetchSepecificProduc(productId);
  //   this.route.navigate(['./specifyProduct']);

  // }

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

    AddToCart(product:any){
      this.http.post('http://localhost:8083/flipkart/addToCart',product,{responseType:'text'}).subscribe((data:any)=>{
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


    ViewCart(product:any){
      this.http.get('http://localhost:8080/flipkart/viewcart',product).subscribe((data:any)=>{
        this.product=data;

      },error=>{
        console.log(error);
      })
    }

}
