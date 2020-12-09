import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Url } from "url";
import {  getFile } from "tns-core-modules/http";
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() { }
  ngOnInit(): void {}
getMarket() {
    return getFile("http://www.nasdaq.com/screening/companies-by-industry.aspx?exchange=NASDAQ&render=download");
}

}
