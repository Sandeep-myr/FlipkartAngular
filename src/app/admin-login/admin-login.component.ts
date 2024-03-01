import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../service/authentication-service.service';
import { RegistrationServiceService } from '../service/registration-service.service';
import { error } from 'console';
import { HttpParams,HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'] 
})
export class AdminLoginComponent {

  user={
    emailId:'',
    password:'',

  }
 userData:any;
 status:boolean=false;
 msg:string='';
  //params: HttpParams='';
  // params: HttpParams = new HttpParams();


  constructor(private router: Router , private authService: AuthenticationServiceService,private service:RegistrationServiceService ,http:HttpClient,) { }
 
admin:any;
  loginAdmins(){
   
 this.service.loginAdmin(this.user.emailId,this.user.password).subscribe((data:any)=>
      {
       console.log(this.user)
      this.admin  = JSON.stringify(data);
    sessionStorage.setItem('admin',this.admin);
    this.status=true;
    this.msg='Login Successfully 🤣🤣🤣🤣'
    
    setTimeout(()=>{
      this.status=false;
      this.router.navigate(['./main-dashboard'])
    },3000);
   
    
  },error=>{
    console.log(error);
    this.status=true;
    this.msg='Invalid credentials Try Again 😒😒😒';
    
    setTimeout(()=>{
      this.status=false;
      this.router.navigate(['/']);
    },4000);
   
  });

  }

  }



