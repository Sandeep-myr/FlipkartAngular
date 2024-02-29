import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomepageComponent } from '../homepage/homepage.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent{
searchKey:any;
loginbtn:boolean=true;


constructor(private mains:HomepageComponent,private http:HttpClient){
 
}

  search() {
this.http.get('http://localhost:8083/flipkart/searchProduct?key='+this.searchKey,{responseType:'json'}).subscribe((data:any)=>{
this.mains.products=data;


}

)

 }


}
