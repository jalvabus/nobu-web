import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import CONFIG from '../../config';
import sendToken from '../../../app/auth.interceptor';
@Injectable()
export class PartesService {

  constructor(public http: Http) { }

  verReporte() {
    return new Promise((resolve, reject) => {
      this.http.get(CONFIG.API + 'parte', sendToken())
        .subscribe((pdf) => {
          console.log(pdf);
          resolve(pdf)
        }, (err) => {
          console.log(err)
          reject(err)
        })
    })
  }

}
