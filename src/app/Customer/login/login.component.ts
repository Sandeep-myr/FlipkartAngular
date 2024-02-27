import { Component, OnInit } from '@angular/core';
import { CustomerApiService } from '../../customer-api.service';
// import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit
{

  customers=
  {
    emailId:'',
    password:''
  }
  CustomerDetails:any;


  constructor(private loginService:CustomerApiService, private router:Router){}

  customer:any;
  Login()
  {
    return this.loginService.LoginCustomer(this.customers.emailId,this.customers.password).subscribe((data:any)=>
    {
      this.customer=JSON.stringify(data);
      sessionStorage.setItem('customer',this.customer);
      this.router.navigate(['/register']);
    })
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
