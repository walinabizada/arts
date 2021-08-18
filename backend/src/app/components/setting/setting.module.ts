import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { SettingRoutingModule } from './setting-routing.module';
import { GeneralComponent } from './general/general.component';
import { FinanceComponent } from './finance/finance.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../../shared/shared.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [GeneralComponent, FinanceComponent, ProfileComponent],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    SettingRoutingModule,
    Ng2SmartTableModule,
    SharedModule
  ]
})
export class SettingModule { }
