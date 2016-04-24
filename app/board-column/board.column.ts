import {Component, Input} from 'angular2/core';
import {RetroService} from '../retro.service';
import {MessageCardComponent} from '../card-component/card.component';

@Component({
	selector: 'board-column',
	templateUrl: './app/board-column/board.column.html',
	directives: [MessageCardComponent]
})

export class BoardColumn{
	public messages: string[]= [];
	@Input() title: string;
	@Input() icon: string;
	@Input() color: string;

	constructor(private _retroService: RetroService) {}

	addMessage(msg: string){
		this.messages.push(msg);
	}
}
