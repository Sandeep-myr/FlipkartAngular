import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { SpecificProductComponent } from './specific-product/specific-product.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'specific-product/:productId',component:SpecificProductComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
