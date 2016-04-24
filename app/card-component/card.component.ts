import {Component, Input} from 'angular2/core';

@Component({
	selector: 'message-card',
	templateUrl: './app/card-component/card.component.html'
})

export class MessageCardComponent {
	@Input() message: string;
	@Input() color: string;
}
