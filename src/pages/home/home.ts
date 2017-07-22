import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { Adl } from "../../models/adl";
import { AdlProvider } from "../../providers/adl/adl";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  adl_data: Adl[];
  sub: Subscription;
  errorMessage: string;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private apiprovider: AdlProvider,
     private loadingCtrl: LoadingController) {

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




}
