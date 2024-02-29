import { HttpClient } from '@angular/common/http';
import { Component, Injectable, Injector, OnInit, Output } from '@angular/core';
import { SpecificProductComponent } from '../specific-product/specific-product.component';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})


export class HomepageComponent implements OnInit {
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

  }

  courseCountRadioButton : string='All';
  searchText: string='';

  onSearchTextEntered(searchValue:string){
    this.searchText = searchValue;
    console.log(this.searchText);

  }
  
  // fetchSpecific(productId: any) {
  //   this.specificProduct.fetchSepecificProduc(productId);
  //   this.route.navigate(['./specifyProduct']);

  // }

}
