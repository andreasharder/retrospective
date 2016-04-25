import {Component, OnInit} from 'angular2/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { Registration} from '../registration/registration';
import { RetroBoard} from '../retro-board/retro.board';
import {RetroService} from '../services/retro.service';


@Component({
    selector: 'my-app',
    templateUrl: './app/app-component/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        RetroService
    ]
})
@RouteConfig([
    {
        path: '/registration',
        name: 'Registration',
        component: Registration
    },
    {
        path: '/retro-board',
        name: 'RetroBoard',
        component: RetroBoard
    }
])
export class AppComponent implements OnInit {

    constructor(private _router: Router){}

    ngOnInit() {
        this._router.navigate(['Registration']);
    }
}
