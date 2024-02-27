import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CustomerApiService } from '../../customer-api.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent
{

  constructor(private customer:CustomerApiService, private router:Router){}

  public register(customerDetails:any) //Accepting CustomerDetails
  {
    this.customer.RegisterCustomer(customerDetails).subscribe(); 
    alert("Registered Successfully.") 
    this.router.navigate(['/login']);
  }
}
