import {Component, Input} from 'angular2/core';
import {RetroService, Message, BoardColumn} from '../retro.service';
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
		var msg: Message = {
			text : this.msgText
		};

		if(this.column.messages.length < 5){
			this.column.messages.push(msg);
		}
		this.msgText = "";
	}

	getMessages():Message[]{
		return this.column.messages;
	}
}
