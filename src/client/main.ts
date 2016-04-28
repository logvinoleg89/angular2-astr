import {provide, enableProdMode} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {APP_BASE_HREF} from 'angular2/platform/common';
import {AppComponent} from './app/components/app.component';
import {HTTP_PROVIDERS} from "angular2/http";

import 'rxjs/add/operator/map';

import {EmploymentService} from './app/employment/index';
import {RelationshipService} from './app/relationship/index';
import {SignService} from './app/sign/index';
import {WishService} from './app/wish/index';
import {UserService} from './app/user/index';

if ('<%= ENV %>' === 'prod') { enableProdMode(); }

let PROVIDERS = [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  EmploymentService,
  RelationshipService,
  SignService,
  WishService,
  UserService,
];

bootstrap(AppComponent, [
  ...PROVIDERS,
  provide(APP_BASE_HREF, { useValue: '<%= APP_BASE %>' })
]);

// In order to start the Service Worker located at "./worker.js"
// uncomment this line. More about Service Workers here
// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
//
// if ('serviceWorker' in navigator) {
//   (<any>navigator).serviceWorker.register('./worker.js').then((registration: any) =>
//       console.log('ServiceWorker registration successful with scope: ', registration.scope))
//     .catch((err: any) =>
//       console.log('ServiceWorker registration failed: ', err));
// }
