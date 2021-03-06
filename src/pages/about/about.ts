import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { Chart } from 'angular-highcharts';
import { ChartProvider } from "../../providers/chart/chart";
import { Adl } from "../../models/adl";


 
@Component({

  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  g: Adl[];
  sub: Subscription;
  chart: any;
  id: string;
  username: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private chartprovider: ChartProvider,

  ) {
    this.username = localStorage.getItem('username');
    this.id = this.username;
    this.chartprovider.getChartdata()
      .then((data: any) => {
        let g = data;
        let categories = [];
        let _dataA: any = {};
        let _dataB: any = {};
        _dataA.name = 'อำเภอ';
        _dataB.name = 'B';
        _dataA.data = [];
        _dataB.data = [];

        g.forEach(v => {
          categories.push(v.ampurname);
          _dataA.data.push(+v.cases);
        });


        this.chart = new Chart({
          chart: {
            type: 'bar'
          },
          title: {
            text: 'รายงาน ADL จังหวัดลำปาง )'
          },
          xAxis: {
            categories: categories,
            crosshair: true
          },
          yAxis: {
            min: 0,
            title: {
              text: 'จำนวน (คน)'
            }
          },
          credits: {
            enabled: false
          },
          series: [_dataA]
        });
      });
  }
}


