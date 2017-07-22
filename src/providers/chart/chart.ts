import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ChartProvider {

  constructor(public http: Http) {

  }

  getChartdata() {
    return new Promise((resolve, reject) => {
      let url = 'http://203.209.96.245/webservice/web/index.php/lampang/adl';
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    })
  }

  private handleError(error: any) {
    return Observable.throw(error.json().errorMessage || 'เกิดข้อผิดพลาดจาก Server');
  }

}
