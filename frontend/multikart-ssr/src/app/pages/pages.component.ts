import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MyDataService } from "../shared/services/mydata.service";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  themeLogo:string; // Change Logo
  public url : any; 

  constructor(private router: Router, private data: MyDataService) {  
    this.router.events.subscribe((event) => {
          if (event instanceof NavigationEnd) {
            this.url = event.url;
          }
    });
  }

  ngOnInit(): void {
    this.data.currentThemeLogo.subscribe(themelogo => this.themeLogo = themelogo);
  }

}
