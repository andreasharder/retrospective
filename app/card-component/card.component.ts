import {Component, Input} from 'angular2/core';
import {RetroService, Message} from '../services/retro/retro.service';

@Component({
	selector: 'message-card',
	templateUrl: './app/card-component/card.component.html'
})

export class MessageCardComponent {
	@Input() message: Message;
	@Input() color: string;
	@Input() columnKey: string;

	constructor(public retroService: RetroService){}

	public deleteMessage(event: Event){
		this.retroService.removeMessage(this.message, this.columnKey);
	}
}
