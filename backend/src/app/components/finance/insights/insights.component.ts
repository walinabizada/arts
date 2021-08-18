import { Component, OnInit } from '@angular/core'; 
import * as chartData from '../../../shared/data/chart';
import { doughnutData, pieData } from '../../../shared/data/chart';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements OnInit {
  
  public doughnutData = doughnutData;
  public pieData = pieData;
  constructor() {
    Object.assign(this, { doughnutData, pieData })
  }

  // doughnut 2
  public view = chartData.view;
  public doughnutChartColorScheme = chartData.doughnutChartcolorScheme;
  public doughnutChartShowLabels = chartData.doughnutChartShowLabels;
  public doughnutChartGradient = chartData.doughnutChartGradient;
  public doughnutChartTooltip = chartData.doughnutChartTooltip;

  public chart5 = chartData.chart5;

  ngOnInit() {
  }

}
