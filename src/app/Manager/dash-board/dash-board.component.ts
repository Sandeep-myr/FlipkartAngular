import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  userData = { managerName: '', emailId: '' };
  visible: boolean = false;
  showPendingStatus: boolean = true;
  showAdminDetails: boolean = false;
  items: any;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'About',
        icon: 'pi pi-fw pi-file',
        routerLink: ['/about'],
        styleClass: 'about-link',
      },
      {
        label: 'FeedBack',
        icon: 'pi pi-fw pi-pencil',
        routerLink: ['/feedback'],
        styleClass: 'feedback-link'
      },
      {
        label: 'Admins',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Get all admins',
            icon: 'pi pi-fw pi-users',
            routerLink: ['/adminDetails'],
            styleClass: 'admins-link'
          },
          {
            label: 'Pending status',
            icon: 'pi pi-fw pi-user-plus',
            routerLink: ['/pendingStatus'],
            styleClass: 'pendingstatus-link'
          }
 
        ]
      },
      {
        label: 'LogOut',
        icon: 'pi pi-fw pi-power-off',
        routerLink: ['/'],
        styleClass: 'logout-link',
        command: () => this.logOut()
      }
    ];
    this.showDialog();
    this.closeRegistration();
    
  }

  logOut(): void {

    sessionStorage.removeItem('manager');
    this.router.navigate(['/']);
  
}

  showDialog(): void {
    
      const model = document.getElementById('myModal12');
      if (model != null) {
        model.style.display = 'block';
      }
      this.visible = true;
      const storeData = sessionStorage.getItem('manager');
      if (storeData) {
        this.userData = JSON.parse(storeData);
      
    }
  }

  closeRegistration(): void {
    if (isPlatformBrowser(this.platformId)) {
      const model = document.getElementById('myModal12');
      if (model != null) {
        model.style.display = 'none';
      }
    }
  }
}
