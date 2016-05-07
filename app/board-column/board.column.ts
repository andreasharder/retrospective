import {Component, Input} from 'angular2/core';
import {RetroService, Message, BoardColumn} from '../services/retro/retro.service';
import {MessageCardComponent} from '../card-component/card.component';

@Component({
	selector: 'board-column',
	templateUrl: './app/board-column/board.column.html',
	directives: [MessageCardComponent]
})

export class BoardColumnComponent{
	@Input() column: BoardColumn;
	public msgText:string;

	constructor(public retroService: RetroService) {}

	addMessage(){
		this.retroService.addMessage(this.msgText, this.column.key);
		this.msgText = "";
	}

	getMessages():Message[]{
		return this.retroService.getMessages(this.column.key);
	}
}
