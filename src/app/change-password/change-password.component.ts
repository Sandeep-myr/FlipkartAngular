import { Component } from '@angular/core';
import { CustomerApiService } from '../customer-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {

  email: any;
  oldPassword: any;
  newPassword: any;
msg:any;
status:boolean=false;
  constructor(private   service:CustomerApiService,private route:Router) { }

  changePassword() {
  
    this.service.changePassword(this.email, this.oldPassword, this.newPassword).subscribe((data:any)=>{
      this.msg='Password changed Successfully'
      this.status=true;
      setTimeout(()=>{
        this.status=false
      },10000)
      
      this.route.navigate(['./'])

    },error=>{
      
      this.status=true;
   this.msg=error.error.message;
      setTimeout(()=>{
        this.status=false
      },10000)
      
    })

  }
}
