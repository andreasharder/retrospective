import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector: 'registration',
    templateUrl: './app/registration/registration.html'
})

export class Registration {
    constructor(private _router: Router) {}

    createBoard(event: Event, name: string){
        event.preventDefault();
        this._router.navigate(['RetroBoard']);
    }
}
