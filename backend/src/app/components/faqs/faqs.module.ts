import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FAQComponent } from './faq.component';
import { FAQSRoutingModule } from './faqs-routing.module';

@NgModule({
  declarations: [FAQComponent],
  imports: [
    CommonModule, 
    FAQSRoutingModule
  ]
})

export class FAQSModule { }
