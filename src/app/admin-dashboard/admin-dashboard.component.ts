import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationServiceService } from '../service/registration-service.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
 export class AdminDashboardComponent implements OnInit
{
categoryList: any;
  ngOnInit(): void {
    
  }

// //   categoryList={
// //     categoryName:'',
// //     productList:[
// //       {
//         productName:'',
// //         brandName:'',
// //         productQty:0,
// //         productPrice:0,
// //         discountPercentage:0,
// //         description:'',
// //         imageUrl:''
// //       },

// //     ]
// // }
// // productForm: any;

// //   constructor(private router:Router , private http:HttpClient,private service:RegistrationServiceService){

// //         }

// //   ngOnInit(): void {
    
// //   }
// //   addProduct(){
// //     const newProduct = {
// //       productName: '',
// //       brandName: '',
// //       productQty: 0,
// //       productPrice: 0,
// //       discountPercentage: 0,
// //       description: '',
// //       imageUrl: ''
// //     };
   
    
//   }
//   saveProduct(){
//     console.log(this.categoryList)
//     return this.service.registerAdmin(this.categoryList).subscribe(data=>
//       {
//         console.log(this.categoryList);
  
//         return this.router.navigate(['./main-dashboard'])
//       },error=>console.log(error));

//   }
 }









