import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './general/general.component';
import { FinanceComponent } from './finance/finance.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path: 'general',
    component: GeneralComponent,
    data: {
      title: "General",
      breadcrumb: "General"
    }
  },
  {
    path: 'finance',
    component: FinanceComponent,
    data: {
      title: "Finance",
      breadcrumb: "Finance"
    }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: {
      title: "Profile",
      breadcrumb: "Profile"
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
