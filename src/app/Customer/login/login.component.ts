import { Component, OnInit } from '@angular/core';
import { CustomerApiService } from '../../customer-api.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit
{

  visibleCustomerNav:boolean=false;
  customers=
  {
    
    password:'',
   mobileNumber:''
  }
  CustomerDetails:any;
msg: any;
status: boolean=false;




  constructor(private loginService:CustomerApiService, private router:Router){}

  

  email:any='';
  customer:any;
  mobileNumber:any;
  success:boolean=true;
  Login()
  {

    this.email=this.customers.mobileNumber
    console.log(this.customers)
  if(this.email.match('@')){
this.mobileNumber=null
  }else{
this.mobileNumber=this.customers.mobileNumber;
this.email=null
  }

     this.loginService.LoginCustomer(this.email,this.customers.password,this.mobileNumber).subscribe((data:any)=>
    {

      this.status=true;
this.msg='Login Successfull👍👍👍';
      this.customer=JSON.stringify(data);
      this.visibleCustomerNav=true;
      sessionStorage.setItem('customer',this.customer);
      setTimeout(()=>{
        this.status=false;
        
        this.router.navigate(['/'], { queryParams: { success: this.success } });
            },2000)
  
    },error=>{
this.status=true;
this.msg=error.error.message;
setTimeout(()=>{
  this.status=false;
      },9000)
    });
    
  }

  ngOnInit(): void {
    
  }

















  // customer: any;
  // constructor(private customerService: CustomerApiService,private fb: FormBuilder, private router:Router) {}

  // login = this.fb.group({
  //   emailId: [],
  //   password: [],
  // });
  // Login() 
  // {
    
  //   this.customerService.LoginCustomer(this.login.controls.emailId.value,this.login.controls.password.value).subscribe((data) => {this.customer = data;});
     
  // }
}
