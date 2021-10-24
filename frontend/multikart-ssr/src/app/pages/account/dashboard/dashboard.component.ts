import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectedItem: number = 0;
  public openDashboard: boolean = false;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
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
