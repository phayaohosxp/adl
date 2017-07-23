import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { AdlProvider } from "../../providers/adl/adl";
import { Adl_detail } from "../../models/adl";


@Component({
  selector: 'page-adldetail',
  templateUrl: 'adldetail.html',
})
export class AdldetailPage {
  id: number;
  ampurname: string;
  sub: Subscription;
  errorMessage: string;
  items: Adl_detail[];

  constructor(
    public navCtrl: NavController,
    private adldetail: AdlProvider ,
    private loadingCtrl: LoadingController,
    public navParams: NavParams)
  {
    this.id = this.navParams.get('id');
    this.ampurname = this.navParams.get('ampurname');
  }

  getAdldetail() {
    let loading = this.loadingCtrl.create({
      content: 'กำลังโหลดข้อมูล...',

    });
    loading.present();
    this.sub = this.adldetail.getAdl_detail(this.id).subscribe(
      (res) => this.items = res,
      (error) => this.errorMessage = <any>error
    ); loading.dismiss();
  }

  ionViewWillEnter() {
    this.getAdldetail();
  }


}
