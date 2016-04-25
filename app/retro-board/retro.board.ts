import {Component} from 'angular2/core';
import {RetroService} from '../services/retro.service';
import {BoardColumnComponent} from '../board-column/board.column';

@Component({
	selector: 'retro-board',
	templateUrl: './app/retro-board/retro.board.html',
	directives: [BoardColumnComponent]
})

export class RetroBoard{
	constructor(public retroService: RetroService) {}
}
