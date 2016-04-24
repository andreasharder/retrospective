import {Component, Input} from 'angular2/core';
import {RetroService, Message} from '../retro.service';

@Component({
	selector: 'message-card',
	templateUrl: './app/card-component/card.component.html'
})

export class MessageCardComponent {
	@Input() message: Message;
	@Input() color: string;
}
