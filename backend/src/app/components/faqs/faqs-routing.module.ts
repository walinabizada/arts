import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FAQComponent } from './faq.component';


const routes: Routes = [
  {
    path: '',
    component: FAQComponent,
    data: {
      title: "Events",
      breadcrumb: "Events"
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FAQSRoutingModule { }
