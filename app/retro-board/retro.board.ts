import {Component, OnInit} from 'angular2/core';
import {RetroService} from '../retro.service';
import {BoardColumn} from '../board-column/board.column';

@Component({
	selector: 'retro-board',
	templateUrl: './app/retro-board/retro.board.html',
	directives: [BoardColumn]
})

export class RetroBoard implements OnInit{
	public topic:String;

	constructor(private _retroService: RetroService) {}

	ngOnInit(){
		this.topic = this._retroService.getTopic();
	}
}
