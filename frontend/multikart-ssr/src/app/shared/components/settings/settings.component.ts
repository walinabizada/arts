import { Component, OnInit, Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ProductService } from "../../services/product.service";
import { Product } from "../../classes/product";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public products: Product[] = [];
  public search: boolean = false;
  
  public languages = [{ 
    name: 'English',
    code: 'en'
  }, {
    name: 'French',
    code: 'fr'
  }];

  public currencies = [{
    name: 'Euro',
    currency: 'EUR',
    price: 0.90 // price of euro
  }, {
    name: 'Rupees',
    currency: 'INR',
    price: 70.93 // price of inr
  }, {
    name: 'Pound',
    currency: 'GBP',
    price: 0.78 // price of euro
  }, {
    name: 'Dollar',
    currency: 'USD',
    price: 1 // price of usd
  }]

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private translate: TranslateService,
    public productService: ProductService) {
    this.productService.cartItems.subscribe(response => this.products = response);
  }

  ngOnInit(): void {
  }

  searchToggle(){
    this.search = !this.search;
  }

  changeLanguage(code){
    if (isPlatformBrowser(this.platformId)) {
      this.translate.use(code)
    }
  }

  get getTotal(): Observable<number> {
    return this.productService.cartTotalAmount();
  }

  removeItem(product: any) {
    this.productService.removeCartItem(product);
  }

  changeCurrency(currency: any) {
    this.productService.Currency = currency
  }
// Collection category
public collectionsCategory = [{
  image: 'assets/images/collection/furniture/1.jpg',
  save: '+100 Items',
  title: 'Pastel',
  link: '/home/left-sidebar/collection/furniture'
}, {
  image: 'assets/images/collection/furniture/1.jpg',
  save: '+30 Items',
  title: 'Charcoal',
  link: '/home/left-sidebar/collection/furniture'
},{
  image: 'assets/images/collection/furniture/1.jpg',
  save: '+20 Items',
  title: 'Conté',
  link: '/home/left-sidebar/collection/furniture'
},{
  image: 'assets/images/collection/furniture/1.jpg',
  save: '+100 Items',
  title: 'Crayon',
  link: '/home/left-sidebar/collection/furniture'
}
]
// Categories name
public categoriesName = ['Pop Art', 'Cubism', 'painting', 'Fantasy', 'Surrealism'];
}
