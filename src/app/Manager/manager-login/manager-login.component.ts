import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrl: './manager-login.component.css'
})
export class ManagerLoginComponent {
  logins = {
    userName: '',
    password: ''
  };
  msg: any;
  status: boolean = false;
  manager: any;
  constructor(private service: ApiServiceService,private route:Router) { }


 
managerData:any;
login() {
  this.service.managerLogin(this.logins).subscribe((data: any) => {
    this.manager = data; 
    sessionStorage.setItem('manager', JSON.stringify(this.manager)); 
    this.msg = 'Login successful';
    setTimeout(() => {
      this.route.navigate(['./dashBoard'])
    }, 1000);
  }, error => {
    this.status = true;      
    this.msg = 'Invalid Credentials';
  });

  setTimeout(() => {
    this.status = false;
  }, 5000);
}

}
