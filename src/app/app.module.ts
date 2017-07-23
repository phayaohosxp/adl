import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { ChartPage } from '../pages/chart/chart';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdlProvider } from '../providers/adl/adl';
import { ChartProvider } from '../providers/chart/chart';
import { ChartModule } from 'angular-highcharts';
import { AdldetailPage } from "../pages/adldetail/adldetail";

@NgModule({
  declarations: [
    MyApp,
    ChartPage,
    ContactPage,
    HomePage,
    TabsPage,
    AdldetailPage
  ],
  imports: [
    BrowserModule,HttpModule, ChartModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChartPage,
    ContactPage,
    HomePage,
    TabsPage,
    AdldetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AdlProvider,
    ChartProvider
  ]
})
export class AppModule {}
