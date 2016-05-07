import {Component, OnInit} from 'angular2/core';
import {RetroService} from '../services/retro/retro.service';
import {UtilService} from '../services/util/util.service'
import {BoardColumnComponent} from '../board-column/board.column';

@Component({
	selector: 'retro-board',
	templateUrl: './app/retro-board/retro.board.html',
	directives: [BoardColumnComponent]
})

export class RetroBoard implements OnInit{
	
	public topic: String;
	
	constructor(public retroService: RetroService, private _utilService: UtilService) {}
	
	ngOnInit(){
		var id = this._utilService.getBoardId();
		this.topic = this.retroService.getTopic(id);
	}
}
