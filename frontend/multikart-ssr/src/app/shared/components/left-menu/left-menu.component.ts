import {
  Component,
  OnInit,
  Injectable,
  PLATFORM_ID,
  Inject,
} from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { TranslateService } from "@ngx-translate/core";
import { ProductService } from "../../services/product.service";
import { NavService, Menu } from "../../services/nav.service";
import { MyDataService } from "../../services/mydata.service";
import { Router } from "@angular/router";


@Component({
  selector: "app-left-menu",
  templateUrl: "./left-menu.component.html",
  styleUrls: ["./left-menu.component.scss"],
})
export class LeftMenuComponent implements OnInit {
  public menuItems: Menu[];
  public darkValue: boolean = false;

  private themeLogoD: string = 'assets/images/icon/logo-12-1.png'; // Change Logo
  private themeLogoN: string = 'assets/images/icon/logo-12.png'; // Change Logo

  private catBackgroundN: string = 'assets/images/parallax/11.jpg'; // Change Category Background
  private catBackroundD: string = 'assets/images/parallax/12.jpg'; // Change Category Background

  private sliderBackgroundN: string = 'assets/images/slider/2back.jpg'; // Change Category Background
  private sliderBackroundD: string = 'assets/images/slider/1back.png'; // Change Category Background

  themeLogo:string;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private translate: TranslateService,
    public productService: ProductService,
    private router: Router,
    public navServices: NavService, private data: MyDataService
  ) {
    this.navServices.leftMenuItems.subscribe(
      (menuItems) => (this.menuItems = menuItems)
    );
    this.router.events.subscribe((event) => {
      this.navServices.mainMenuToggle = false;
    });
  }

  ngOnInit(): void {
    this.data.currentThemeLogo.subscribe(themelogo => this.themeLogo = themelogo)
  }

  leftMenuToggle(): void {
    this.navServices.leftMenuToggle = !this.navServices.leftMenuToggle;
  }

  // Click Toggle menu (Mobile)
  toggletNavActive(item) {
    item.active = !item.active;
  }

  onHover(menuItem) {
    if (window.innerWidth > 1200 && menuItem) {
      document.getElementById("unset").classList.add("sidebar-unset");
    } else {
      document.getElementById("unset").classList.remove("sidebar-unset");
    }
  }
  public languages = [
    {
      name: "English",
      code: "en",
    },
    {
      name: "French",
      code: "fr",
    },
  ];

  public currencies = [
    {
      name: "Euro",
      currency: "EUR",
      price: 0.9, // price of euro
    },
    {
      name: "Rupees",
      currency: "INR",
      price: 70.93, // price of inr
    },
    {
      name: "Pound",
      currency: "GBP",
      price: 0.78, // price of euro
    },
    {
      name: "Dollar",
      currency: "USD",
      price: 1, // price of usd
    },
  ];
  changeLanguage(code) {
    if (isPlatformBrowser(this.platformId)) {
      this.translate.use(code);
    }
  }
  changeCurrency(currency: any) {
    this.productService.Currency = currency;
  }

  customizeLayoutDark() {
    document.body.classList.toggle("dark");
    this.darkValue = !this.darkValue;
    var classValue: string = document.body.className;
    classValue === 'ltr dark'? this.changeLogo(this.themeLogoD, this.catBackroundD, this.sliderBackroundD): this.changeLogo(this.themeLogoN, this.catBackgroundN, this.sliderBackgroundN);
  }
  changeLogo(logo, back, sliderBack){
    this.data.changeThemeLogo(logo, back, sliderBack);
  }
}
