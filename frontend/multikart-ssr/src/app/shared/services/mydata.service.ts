import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
    providedIn: 'root'
  })
export class MyDataService {
    private themeLogoN: string = 'assets/images/icon/logo-12.png'; // Change Logo
    private themeLogo = new BehaviorSubject<string>(this.themeLogoN);
    currentThemeLogo = this.themeLogo.asObservable();
    
    private catBackgroundN: string = 'assets/images/parallax/11.jpg'; // Change Logo
    private catBackground = new BehaviorSubject<string>(this.catBackgroundN);
    currentCatBackground = this.catBackground.asObservable();

    private sliderBackgroundN: string = 'assets/images/slider/2back.jpg'; // Change Logo
    private sliderBackground = new BehaviorSubject<string>(this.sliderBackgroundN);
    currentSliderBackground = this.sliderBackground.asObservable();
    
    constructor(){ }

    changeThemeLogo(themeLogo: string, catBackground: string, sliderBack: string){
        this.themeLogo.next(themeLogo);
        this.catBackground.next(catBackground);
        this.sliderBackground.next(sliderBack);
    }
}