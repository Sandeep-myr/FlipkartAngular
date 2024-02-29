import { HttpClient } from '@angular/common/http';
import { Component, Injectable, Injector, OnInit } from '@angular/core';
import { SpecificProductComponent } from '../specific-product/specific-product.component';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { error } from 'console';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {

categories: any;

  addToCart(_t5: any) {
    throw new Error('Method not implemented.');
  }

  public products: any;

  constructor(private http: HttpClient, private specificProduct: SpecificProductComponent, private route: Router) { }
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

}
