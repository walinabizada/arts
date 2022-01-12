import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectedItem: number = 0;
  public openDashboard: boolean = false;
  public user: any;

  constructor(private tokenStorageService: TokenStorageService, private userService: UserService) { }

  ngOnInit(): void {
    
    // setTimeout(() => {
      this.getUser(this.tokenStorageService.getUser().userId);
    // }, 2000);
    console.log('user value in dashboard', this.user);
  }
  getUser(id: any): void{
    this.userService.get(id)
    .subscribe(
      data => {
        this.user = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  ToggleDashboard() {
    this.openDashboard = !this.openDashboard;
  }

  select(index: number) {
      this.selectedItem = index;
  }
}
