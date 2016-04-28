import {Injectable}     from 'angular2/core';
import {Http, Headers, RequestOptions, Response} from 'angular2/http';
import {UserInterface}           from '../interfaces/user';
import {Observable}     from 'rxjs/Observable';
import {APP_CONFIG} from "../../../app.constant";
import * as _ from 'lodash';

@Injectable()
export class UserService {
  public user = {};
  private _apiUrl = `${APP_CONFIG.apiUrl}/users`;  // URL to web api

  constructor (private http: Http) {
  }

  save (data: UserInterface): Observable<UserInterface>  {

    let body = JSON.stringify({ data });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._apiUrl, body, options)
    .map(this.extractData)
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }

    return res.json();
  }
}