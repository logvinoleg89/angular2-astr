import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NavbarComponent} from './navbar.component';
import {ToolbarComponent} from './toolbar.component';
import {NameListService} from '../shared/index';
import {HomeComponent} from '../+home/index';
import {AboutComponent} from '../+about/index';
import {SignUpComponent} from '../+signUp/index';
import {TestComponent} from '../+test/index';

@Component({
  selector: 'sd-app',
  viewProviders: [NameListService],
  templateUrl: 'app/components/app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent]
})
@RouteConfig([
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/about',
    name: 'About',
    component: AboutComponent
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpComponent
  },
  {
    path: '/test',
    name: 'Test',
    data: {q:111111111},
    component: TestComponent
  },
])
export class AppComponent {}
