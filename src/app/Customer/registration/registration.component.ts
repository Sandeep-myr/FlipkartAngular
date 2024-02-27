import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CustomerApiService } from '../../customer-api.service';
import { error } from 'console';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent
{
  msg: string='';
  status: boolean=false;

  constructor(private customer:CustomerApiService, private router:Router){}

   customerDetails={
    
      customerName: '' ,
      emailId: '',
      password: '',
      mobileNumber: 0
     
      
   };
  public register(customerDetails:any) //Accepting CustomerDetails
  {
      
    this.customer.RegisterCustomer(customerDetails).subscribe((data:any)=>{
      this.msg=data;
      this.status=true;

    },error=>{
      this.msg=error;
      this.status=true;
    }); 
    setTimeout(()=>{
this.status=false;
    },5000) 
    this.router.navigate(['/login']);
  }
}
