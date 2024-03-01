import { Component, OnInit } from '@angular/core';



import { Router } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';
import { AdminDetailsComponent } from '../admin-details/admin-details.component';





@Component({
  selector: 'app-pending-status',
  templateUrl: './pending-status.component.html',
  styleUrl: './pending-status.component.css'
})
export class PendingStatusComponent implements OnInit{
  content=
  {
    emailId:'',
    action:null
  };
  constructor(private apiser:ApiServiceService,private router:Router){}
  ngOnInit(): void {
    this.PendingRequestMethod();
  
    
    
   
  }
  pendingAdmin:any;


PendingRequestMethod(){
  return this.apiser.pendingRequest().subscribe(data=>{
      this.pendingAdmin=data;
  },error=>console.log(error));
}

opens:boolean=false
msg:string='';
approveAdmin(status:boolean,emailId:string){


// this.content.action=status;
   
       this.apiser.approveStatus(emailId,status).subscribe((Content:any)=>{
        this.opens=true;
        this.msg='! oh Status is Approved'
      },error=>{
        this.opens=true;
        this.msg='! oh Status is Not Approved'
      }
      )

      setTimeout(()=>{
this.opens=false;
      },5000)

   this.PendingRequestMethod();
  }
}

