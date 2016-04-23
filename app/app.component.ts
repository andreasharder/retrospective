import {Component, OnInit} from 'angular2/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { Registration} from './registration/registration';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
      ROUTER_PROVIDERS
    ]
})
@RouteConfig([
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  }
])
export class AppComponent implements OnInit {

    constructor(private _router: Router){}

    ngOnInit() {
        this._router.navigate(['Registration']);
    }
}
