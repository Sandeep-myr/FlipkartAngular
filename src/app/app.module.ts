import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { TagModule } from 'primeng/tag'; 
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

import { AvatarModule } from 'primeng/avatar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SpecificProductComponent } from './specific-product/specific-product.component';
import { RegistrationComponent } from './Customer/registration/registration.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

import { LoginComponent } from './Customer/login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';

import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AdminDetailsComponent } from './Manager/admin-details/admin-details.component';
import { DashBoardComponent } from './Manager/dash-board/dash-board.component';
import { ManagerLoginComponent } from './Manager/manager-login/manager-login.component';
import { PendingStatusComponent } from './Manager/pending-status/pending-status.component';
import { RegistrationManagerComponent } from './Manager/registration-manager/registration-manager.component';
import { StatusComponent } from './Manager/status/status.component';
import { ProfilePictureComponent } from './Manager/profile-picture/profile-picture.component';
import { ApiServiceService } from './Manager/service/api-service.service';
import { ManagerProfileComponent } from './Manager/manager-profile/manager-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    SpecificProductComponent,
    LoginComponent,
    RegistrationComponent,
    AdminLoginComponent,
    MainDashboardComponent,

    ChangePasswordComponent,
    AdminRegistrationComponent,
    ViewcartComponent,
    OrderHistoryComponent,
    AdminDetailsComponent,
    DashBoardComponent,
    ManagerLoginComponent,
    PendingStatusComponent,
    RegistrationManagerComponent,
    StatusComponent,
    ProfilePictureComponent,
    RegistrationManagerComponent,
    DashBoardComponent,
    AdminDetailsComponent,
    PendingStatusComponent,
    StatusComponent,
    ManagerLoginComponent,
    ProfilePictureComponent,
    ManagerProfileComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MenubarModule,
    RouterModule,
    CardModule,
    ImageModule,
    TagModule,
    TableModule,
    DialogModule,
    ButtonModule,
    AnimateOnScrollModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    AvatarModule
  ],
  providers: [
    ApiServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
