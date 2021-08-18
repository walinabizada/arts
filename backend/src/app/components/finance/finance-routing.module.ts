import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsComponent } from './transactions/transactions.component';
import { InsightsComponent } from './insights/insights.component';
import { ChartOfAccountComponent } from './chart-of-account/chartOfAccount.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'insights',
        component: InsightsComponent,
        data: {
          title: "Insights",
          breadcrumb: "Insights"
        }
      },
      {
        path: 'transactions',
        component: TransactionsComponent,
        data: {
          title: "Transactions",
          breadcrumb: "Transactions"
        }
      },
      {
        path: 'chart-of-account',
        component: ChartOfAccountComponent,
        data: {
          title: "Chart of Account",
          breadcrumb: "Chart of Account"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
