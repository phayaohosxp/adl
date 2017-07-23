import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { Adl } from "../../models/adl";
import { AdlProvider } from "../../providers/adl/adl";
import { Chart } from 'angular-highcharts';
import { ChartProvider } from "../../providers/chart/chart";
import { AdldetailPage } from "../../pages/adldetail/adldetail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  adl_data: Adl[];
  sub: Subscription;
  errorMessage: string;
  chart: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private apiprovider: AdlProvider,
    private chartprovider: ChartProvider,
    private loadingCtrl: LoadingController) {

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
  private getAdl() {
    let loading = this.loadingCtrl.create({
      content: 'กำลังโหลดข้อมูล...',
    });
    loading.present();
    this.sub = this.apiprovider.getAdllampang().subscribe(
      (res) => this.adl_data = res,
      (error) => this.errorMessage = <any>error
    ); loading.dismiss();

  }

  ionViewWillLeave() {
    this.sub.unsubscribe();
  }

  ionViewWillEnter() {
    this.getAdl();
  }


  itemSelected(item): void {
    this.navCtrl.push(AdldetailPage, {
      id: item.ampurcodefull,
      ampurname: item.ampurname
    });
  }


}
