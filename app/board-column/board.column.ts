import {Component, Input} from 'angular2/core';
import {RetroService, Message} from '../retro.service';
import {MessageCardComponent} from '../card-component/card.component';

@Component({
	selector: 'board-column',
	templateUrl: './app/board-column/board.column.html',
	directives: [MessageCardComponent]
})

export class BoardColumn{
	@Input() title: string;
	@Input() icon: string;
	@Input() color: string;
	public msgText:string;
	public messages: Message[] = [];

	constructor(private _retroService: RetroService) {}

	addMessage(){
		var msg: Message = {
			text : this.msgText
		};

		this.messages.push(msg);
		this.msgText = "";
	}
}
