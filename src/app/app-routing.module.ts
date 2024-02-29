import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecificProductComponent } from './specific-product/specific-product.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './Customer/login/login.component';
import { RegistrationComponent } from './Customer/registration/registration.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { AppComponent } from './app.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'specific-product/:productId',component:SpecificProductComponent},
  
  
  {path:'change-password',component:ChangePasswordComponent},

  {path:"register",component:RegistrationComponent},
  {path:"login",component:LoginComponent},

  {path:'',component:HomepageComponent},
  {path:'specific-product/:productId',component:SpecificProductComponent},
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'adminlogin',
    component: AdminLoginComponent,
  },
  {
    path: 'adminregister',
    component: AdminRegistrationComponent,
  },
  {
    path: 'main-dashboard',
    component: MainDashboardComponent,
  },
  // {
  //   path:'addtocart',
  //   component:AddToCartComponent,
  // },

  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
