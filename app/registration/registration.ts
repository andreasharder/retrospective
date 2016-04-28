import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {RetroService} from '../services/retro.service';
import {UtilService} from '../services/util.service';

@Component({
    selector: 'registration',
    templateUrl: './app/registration/registration.html'
})

export class Registration {
    constructor(private _router: Router, private _retroService: RetroService, private _util: UtilService) {}

    createBoard(event: Event, name: string){
        event.preventDefault();
        
        this._retroService.setTopic(name);
        var boardId = this._util.getNewBoardId();

        this._router.navigate(['RetroBoard', { id:  boardId}]);
    }
}
