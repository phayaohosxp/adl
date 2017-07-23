import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Adl,Adl_detail } from "../../models/adl";


@Injectable()
export class AdlProvider {

  constructor(public http: Http) {

  
  }

  getAdllampang(): Observable<Adl[]> {
    return this.http.get('http://203.209.96.245/webservice/web/index.php/lampang/adl')
      .map((res: Response) => <Adl[]>res.json())
      .catch(this.handleError);
  }

  getAdl_detail(id:number): Observable<Adl_detail[]> {
    return this.http.get('http://203.209.96.245/webservice/web/index.php/lampang/lampang?ampurcodefull=' + id)
      .map((res: Response) => <Adl[]>res.json())
      .catch(this.handleError);
  }


  private handleError(error: any) {
    return Observable.throw(error.json().errorMessage || 'เกิดข้อผิดพลาดจาก Server');
  }

}
