import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Sign}           from '../interfaces/sign';
import {Observable}     from 'rxjs/Observable';
import {APP_CONFIG}     from "../../../app.constant";
import * as _ from 'lodash';

@Injectable()
export class SignService {
  public vocabluary = [];
  private _signsUrl = `${APP_CONFIG.apiUrl}/signs`;

  constructor (private http: Http) {
  }


  get (): Observable<Sign[]>{
    let result = this.http.get(this._signsUrl)
    .map(this.extractData, this);

    return result;
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }

    _.assign(this.vocabluary, res.json());

    return this.vocabluary;
  }
}