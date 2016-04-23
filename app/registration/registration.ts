import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {RetroService} from '../retro.service';

@Component({
    selector: 'registration',
    templateUrl: './app/registration/registration.html'
})

export class Registration {
    constructor(private _router: Router, private _retroService: RetroService) {}

    createBoard(event: Event, name: string){
        event.preventDefault();
        this._retroService.setTopic(name);
        this._router.navigate(['RetroBoard']);
    }
}
