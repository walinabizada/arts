import { Component, OnInit } from '@angular/core';
import { transactionsDB } from '../../../shared/tables/transactions';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  public transactions = [];

  constructor() { 
    this.transactions = transactionsDB.data;
  }

  ngOnInit(): void {
  }

  public settings = {
    actions: false,
    hideSubHeader: true,
    columns: {
      order_id: {
        title: 'Order Id', filter: false
      },
      transaction_id: {
        title: 'Transaction Id', filter: false
      },
      date: {
        title: 'Date', filter: false
      },
      pay_method: {
        title: 'Payment Method', filter: false,
        type: 'html',
      },
      delivery_status: {
        title: 'Delivery Status', filter: false
      },
      amount: {
        title: 'Amount', filter: false
      }
    },
  };

}
