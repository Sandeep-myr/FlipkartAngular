import { Component ,OnInit } from '@angular/core';
import { RegistrationServiceService } from '../service/registration-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.css'
})
export class MainDashboardComponent implements OnInit
 {
  // showCategoryForm: boolean = false;
 
  selectedCategory: string='';
  category:any
  
 productForm!: FormGroup;
  constructor(private service:RegistrationServiceService ,private router:Router , private formBuilder:FormBuilder){

  }
goToCart() {

}
logout() {
  alert('Now you logged Out');
  console.log('logged out');
  // sessionStorage.removeItem();
}
addProduct() {
  const newProduct = {
    productName: '',
    brandName: '',
    productQty: 0,
    productPrice: 0,
    discountPercentage: 0,
    description: '',
    imageUrl: ''
  };

}
  categoryList:any={
    categoryName:'',
    productList:[
      {
        productName:'',
        brandName:'',
        productQty:0,
        productPrice:0,
        discountPercentage:0,
        description:'',
        imageUrl:''
      },

    ],
  
}
ngOnInit(): void {

  this.productForm=this.formBuilder.group({
    productName: '',
    brandName: '',
    productQty: 0,
    productPrice: 0,
    discountPercentage: 0,
    description: '',
    imageUrl: ''
  });
}

saveProduct(){
  console.log(this.categoryList)
  return this.service.registerAdmin(this.categoryList).subscribe(data=>
    {
      console.log(this.categoryList);

      return this.router.navigate(['./main-dashboard'])
    },error=>console.log(error));

}



// openProductForm() {
//   // this.showCategoryForm = false;
//   // this.showProductForm = true;
//   // Perform any other actions like fetching data based on selected category
// }

 }
