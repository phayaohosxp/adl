import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { Chart } from 'angular-highcharts';
import { ChartProvider } from "../../providers/chart/chart";
import { Adl } from "../../models/adl";


 
@Component({

  selector: 'page-chart',
  templateUrl: 'chart.html',
})
export class ChartPage {
  g: Adl[];
  sub: Subscription;
  chart: any;
  id: string;
  username: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private chartprovider: ChartProvider,
    private loadingCtrl: LoadingController

  ) {
     let loading = this.loadingCtrl.create({
      content: 'กำลังโหลดข้อมูล...',
    });
    loading.present();
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
    loading.dismiss();
  }

  
}


