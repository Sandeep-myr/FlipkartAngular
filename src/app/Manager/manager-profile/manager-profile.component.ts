import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-profile',
  templateUrl: './manager-profile.component.html',
  styleUrl: './manager-profile.component.css'
})
export class ManagerProfileComponent implements OnInit {

  managerDetails:any;

  ngOnInit(){
    const manager = sessionStorage.getItem('manager');
  
    if(manager!=null){
     this.managerDetails = JSON.parse(manager);
     console.log(this.managerDetails)
    }  
  }
}
