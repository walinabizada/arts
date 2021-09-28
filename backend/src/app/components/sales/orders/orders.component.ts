import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable";
import * as chartData from '../../../shared/data/chart';
import { doughnutData, pieData } from '../../../shared/data/chart';
import { orderDB } from "../../../shared/tables/order-list";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public order = [];
  public temp = [];
  public doughnutData = doughnutData;
  public pieData = pieData;

  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  constructor() {
    this.order = orderDB.list_order;
    Object.assign(this, { doughnutData, pieData })
  }
// doughnut 2
public view = chartData.view;
public doughnutChartColorScheme = chartData.doughnutChartcolorScheme;
public doughnutChartShowLabels = chartData.doughnutChartShowLabels;
public doughnutChartGradient = chartData.doughnutChartGradient;
public doughnutChartTooltip = chartData.doughnutChartTooltip;

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.order = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  ngOnInit() {
  }

}
