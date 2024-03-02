import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { HomepageComponent } from '../homepage/homepage.component';
import { LoginComponent } from '../Customer/login/login.component';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
@Injectable({
  providedIn: 'root',
})
export class NavbarComponent implements OnInit{

searchKey:any;
loginbtn:boolean=true;
openflex: any;
open: any;
history: any;
productId: any;
success: boolean =false;


constructor(private mains:HomepageComponent,private http:HttpClient,private route:ActivatedRoute,private router:Router){
 
}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.success = params['success'];
    });
  }

  search() {
   this.http.get('http://localhost:8083/flipkart/searchProduct?key='+this.searchKey,{responseType:'json'}).subscribe((data:any)=>{
   this.mains.products=data;


}

)

 }
 logout() {
  sessionStorage.removeItem('customer');
  this.router.navigate(['/']);
}

}
