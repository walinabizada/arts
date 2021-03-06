import { Component, OnInit } from '@angular/core';
import { taxesDB } from '../../../shared/tables/taxes';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {
  public taxes = []
  constructor() { 
    this.taxes = taxesDB.data;
  }
  public settings = {
    actions: {
      position: 'right'
    },
    columns: {
      detail: {
        title: 'Tax Detail'
      },
      tax_schedule: {
        title: 'Tax Schedule'
      },
      rate: {
        title: 'Tax Rate'
      },
      total_amount: {
        title: 'Total Tax Amount'
      }
    },
  };
  ngOnInit() { }

}
