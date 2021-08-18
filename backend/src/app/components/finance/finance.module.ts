import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CountToModule } from 'angular-count-to';
import { ChartsModule } from 'ng2-charts';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartistModule } from 'ng-chartist';
import { FinanceRoutingModule } from './finance-routing.module';
import { TransactionsComponent } from './transactions/transactions.component';
import { InsightsComponent } from './insights/insights.component';
import { SharedModule } from '../../shared/shared.module';
import { ChartOfAccountComponent } from './chart-of-account/chartOfAccount.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [TransactionsComponent, InsightsComponent, ChartOfAccountComponent],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    Ng2SmartTableModule,
    NgxDatatableModule,
    ChartsModule,
    Ng2GoogleChartsModule,
    NgxChartsModule,
    ChartistModule, 
    CountToModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class FinanceModule { }
