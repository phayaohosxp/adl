import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
slides = [
    {
      title: "Ionic Framework3",
      description: "",
      image: "../../assets/icon/ionic.png",
    },
    {
      title: "AngulurJS 4",
      description: "",
      image: "../../assets/icon/angular.png",
    },
    {
      title: "Yii2 Framework2 RestFull-API",
      description: "",
      image: "../../assets/icon/yii2.jpg",
    }
  ];
  constructor(public navCtrl: NavController) {



    
  }

}
