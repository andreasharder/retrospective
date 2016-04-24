import {Component, OnInit} from 'angular2/core';
import {RetroService} from '../retro.service';
import {MessageCardComponent} from '../card-component/card.component';

@Component({
	selector: 'retro-board',
	templateUrl: './app/retro-board/retro.board.html',
	directives: [MessageCardComponent]
})

export class RetroBoard implements OnInit{
	public messages: string[]= [];
	public topic:String;

	constructor(private _retroService: RetroService) {}

	ngOnInit(){
		this.topic = this._retroService.getTopic();
	}

	addMessage(msg: string){
		this.messages.push(msg);
	}
}
