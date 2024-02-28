import { Component, OnInit } from '@angular/core';
import { RegistrationServiceService } from '../service/registration-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.css',
})
export class MainDashboardComponent implements OnInit {
other: boolean=false;
categoryChoose: string='';

openCategoryForm() {
  
this.other=true;
}


  categoryLists: any;

  submitForm() {
    this.open = false;
    alert('Product added successfully');
  }
  open: boolean = false;

  openForm() {
    this.categoryListName();
    this.open = true;
  }
  // showCategoryForm: boolean = false;


  selectedCategory: string = '';
  category: any;

  productForm!: FormGroup;
  constructor(
    private service: RegistrationServiceService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  goToCart() {}
  logout() {
    alert('Now you logged Out');
    console.log('logged out');
    
  }

  


     newProduct =[{
      productName: '',
      brandName: '',
      productQty: 0,
      productPrice: 0,
      discountPercentage: 0,
      description: '',
      imageUrl: '',
    },];
  
  categoryList: any = {
    categoryName: '',
    productList: [
      {
        productName: '',
        brandName: '',
        productQty: 0,
        productPrice: 0,
        discountPercentage: 0,
        description: '',
        imageUrl: '',
      },
    ],
  };
   
  ngOnInit(): void
   {
  if(this.categoryChoose.match('other'))
{
  this.other=true;
}

  }
  //--------------------------------------------------------------------------------

    saveProduct() 
    {
    console.log(this.categoryList);
    return this.service.registerAdmin(this.categoryList).subscribe(
      (data) => {
        console.log(this.categoryList);

        return this.router.navigate(['./main-dashboard']);
      },
      (error) => console.log(error)
    );
  }

//-------------------------------------------------------------------------------------
  categoryListName(){
    this.service.fetchCategoryList().subscribe((data:any)=>{
      this.categoryLists=data
    },error=>{
   console.log(error)
    })
  }

  //---------------------------------------------------------------------------------------

  AddProduct(){
    return this.service.addProducts(this.newProduct).subscribe(
      (data) =>{
        console.log(this.newProduct);
        return this.router.navigate(['./addtocart']);
        
      }
    )
  }
 



}
