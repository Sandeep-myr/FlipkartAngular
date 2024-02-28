import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrl: './viewcart.component.css'
})
export class ViewcartComponent implements OnInit
{
  constructor() {
    
  }
  ngOnInit(): void {
    console.log('product added');
  }

}
