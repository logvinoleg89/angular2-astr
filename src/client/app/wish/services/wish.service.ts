import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Wish}           from '../interfaces/wish';
import {Observable, Operator}     from 'rxjs';
import {APP_CONFIG} from "../../../app.constant";
import * as _ from 'lodash';

//import 'rx';

@Injectable()
export class WishService {
  public vocabluary = [];
  private _signsUrl = `${APP_CONFIG.apiUrl}/wishes`;

  constructor (private http: Http) {
  }

  get (): Observable<Wish[]>{
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