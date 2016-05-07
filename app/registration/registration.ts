import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {RetroService} from '../services/retro/retro.service';
import {UtilService} from '../services/util/util.service';

@Component({
    selector: 'registration',
    templateUrl: './app/registration/registration.html'
})

export class Registration {
    constructor(private _router: Router, private _retroService: RetroService, private _util: UtilService) {}

    createBoard(event: Event, topic: string){
        event.preventDefault();
        
        var boardId = this._util.getNewBoardId();
        this._retroService.addBoard(topic, boardId);       
        this._router.navigate(['RetroBoard', { id:  boardId}]);
    }
}
