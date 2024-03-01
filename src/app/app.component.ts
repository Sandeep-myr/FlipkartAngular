import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewcartComponent } from './viewcart/viewcart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {



  ngOnInit(): void {
   
  }




  title = 'Flipkart';
  
}
