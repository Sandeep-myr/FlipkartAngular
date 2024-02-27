import { Component, Injectable, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { ActivatedRoute } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-specific-product',
  templateUrl: './specific-product.component.html',
  styleUrl: './specific-product.component.css'
})
@Injectable({
  providedIn: 'root'
})

export class SpecificProductComponent implements OnInit {

 

  productResponse: any;
  starRating: any;
  productReviewResponseList: any;

  constructor(private service: HomeService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = params['productId'];
      this.fetchSpecificProduct(productId);
    });
  }


  getStarRatingArray(): any[] {
    return Array(this.starRating).fill(0);
  }

  makeStar(starValue:any){
    return Array(starValue).fill(0);
  }
  fetchSpecificProduct(productId: any) {
    this.service.fetchSpecificProduct(productId).subscribe((data: any) => {
      this.productResponse = data.productResponse;
      this.starRating = data.starRating;
      this.productReviewResponseList = data.productReviewResponseList;

    }, error => {
      console.log(error);
    })

  }




}
