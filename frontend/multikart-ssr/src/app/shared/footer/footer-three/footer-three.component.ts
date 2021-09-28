import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FaqComponent } from '../../components/modal/faq/faq.component'; 
@Component({
  selector: 'app-footer-three',
  templateUrl: './footer-three.component.html',
  styleUrls: ['./footer-three.component.scss']
})
export class FooterThreeComponent implements OnInit {

  @Input() class: string; // Default class 
  @Input() mainFooter: boolean = true; // Default true 
  @Input() subFooter: boolean = false; // Default false 
  @Input() themeLogo: string = 'assets/images/icon/logo.png'; // Default Logo

  public today: number = Date.now();
  @ViewChild("faqView") FaqView: FaqComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
