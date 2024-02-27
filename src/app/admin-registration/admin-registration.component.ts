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
  registrationService: any;

  showPermanentForm: boolean = true;
 
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

  togglePermanentForm() {
    this.showPermanentForm = true;
  }

  toggleTemporaryForm() {
    this.showPermanentForm = false;
  }


  addAdmin(adminData: any) 
  {
    this.admins.push(adminData);
  }

  adminRegister()
  {
    alert(`register successful`);
    this.admins.push(this.admins);
  }

  saveAdmin()
  {
    console.log(this.admin)
    return this.service.registerAdmin(this.admin).subscribe(data=>
      {
        console.log(this.admin);
  
        return this.router.navigate(['./login'])
      },error=>console.log(error));
  }
  
  }




