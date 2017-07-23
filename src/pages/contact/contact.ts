import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
slides = [
    {
      title: "Slide1",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "https://static.pexels.com/photos/512861/pexels-photo-512861.jpeg",
    },
    {
      title: "Slide2",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "https://static.pexels.com/photos/394887/pexels-photo-394887.jpeg",
    },
    {
      title: "Slide3",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "https://static.pexels.com/photos/518242/pexels-photo-518242.jpeg",
    }
  ];
  constructor(public navCtrl: NavController) {



    
  }

}
