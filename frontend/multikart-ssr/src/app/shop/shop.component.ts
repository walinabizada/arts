import { Component, OnInit } from '@angular/core';
import { MyDataService } from "../shared/services/mydata.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  themeLogo:string; // Change Logo
  constructor(private data: MyDataService) { }

  ngOnInit(): void {
    this.data.currentThemeLogo.subscribe(themelogo => this.themeLogo = themelogo);
  }

}
