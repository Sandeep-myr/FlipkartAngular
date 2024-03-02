import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { RegistrationServiceService } from '../service/registration-service.service';

import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrl: './admin-registration.component.css'
})
export class AdminRegistrationComponent {

  username: string='';
  password: string='';
  admins: any[] = [];
  currentUser:any;

  admin={
    adminName:'',
    adminAddresses:[
    { 
      city: '',
    street: '',
    state: '',
    country: '',
    zipCode: 0},
    { 
      city: '',
    street: '',
    state: '',
    country: '',
    zipCode: 0
  }],
    adminContacts:
    [{
      mobileNumber: 0,
    emailId: ''
  },
    
  {mobileNumber: 0,
      emailId: ''
    }]
  }
 

  constructor(private router: Router,private service:RegistrationServiceService) 
  {}

opens:boolean=false;
  msg:any;

  saveAdmin()
  {
    console.log(this.admin)
     this.service.registerAdmin(this.admin).subscribe((data:any)=>
      {
this.opens=true;
this.msg=data;


setTimeout(()=>{


  this.router.navigate(['./adminlogin'])
},5000)  

      },error=>{

        
this.opens=true;
this.msg=error;
setTimeout(()=>{

  this.router.navigate(['./'])
},5000)
      })
      }
  
  }




