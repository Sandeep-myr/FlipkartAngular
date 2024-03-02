import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecificProductComponent } from './specific-product/specific-product.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './Customer/login/login.component';
import { RegistrationComponent } from './Customer/registration/registration.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';

import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { AppComponent } from './app.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


import { OrderHistoryComponent } from './order-history/order-history.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { ManagerLoginComponent } from './Manager/manager-login/manager-login.component';
import { RegistrationManagerComponent } from './Manager/registration-manager/registration-manager.component';
import { DashBoardComponent } from './Manager/dash-board/dash-board.component';
import { AdminDetailsComponent } from './Manager/admin-details/admin-details.component';
import { PendingStatusComponent } from './Manager/pending-status/pending-status.component';

import { ProfilePictureComponent } from './Manager/profile-picture/profile-picture.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  
  {path:'specific-product/:productId',component:SpecificProductComponent},
  
  
  {path:'change-password',component:ChangePasswordComponent},

  {path:"register",component:RegistrationComponent},
  {path:"login",component:LoginComponent},

  {path:'specific-product/:productId',component:SpecificProductComponent},
 
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
  {
    path: 'viewcart',
    component: ViewcartComponent,
  },
  {
    path:'order-history',
    component:OrderHistoryComponent,
  },

  {path:"manager-login",component:ManagerLoginComponent},
  // {path:"",redirectTo:"manager-login",pathMatch:"full"},

  {path:"registration-manager",component:RegistrationManagerComponent},

  {path:"dashBoard",component:DashBoardComponent},

  {path:"adminDetails", component:AdminDetailsComponent},

  {path:"pendingStatus", component:PendingStatusComponent},



  {path:"profilePicture",component:ProfilePictureComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
