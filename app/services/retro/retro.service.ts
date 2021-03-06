import {Injectable} from 'angular2/core';

@Injectable()
export class RetroService {
	
	public addBoard(topic: string, id: string){
		var board: Board ={
			topic: topic,
			id: id
		}
		BOARDS.push(board);
	}
	
	public getTopic(id: string): String{
		return this._getBoardById(id).topic;
	}

	public getColumns(): BoardColumn[]{
		return COLUMNS;
	}

	public getMessages(key : string): Message[]{
		return this._getMessagesByColumn(key);
	}

	public addMessage(msgText: string, key: string){
		var msg: Message = {
			text : msgText,
			column: key
		};
		MESSAGES.push(msg);
	}

	public removeMessage(msg: Message, key: string){
		var messages = MESSAGES;

		var index = messages.indexOf(msg);
		if(index >= 0){
			MESSAGES.splice(index, 1);
		}
	}
	
	private _getMessagesByColumn(key: string){
		var messages = MESSAGES.filter((msg, index) => {
			if(msg.column === key){
				return true;
			}
		});
		return messages;
	}
	
	private _getBoardById(id: string): Board {
		var board = BOARDS.find((brd, index) => {
			if(brd.id === id){
				return true;
			}
		});		
		return board;
	}
}

export interface Message{
	text: string;
	column: string;
}

export interface Board {
	topic: string;
	id: string;
}

export interface BoardColumn{
	key:string;
	icon:string;
	title:string;
	color:string;
}

export var BOARDS: Board[] = [];

export var COLUMNS : BoardColumn[] = [
	{ key: "1", icon : "mood", title: "What went well?", color: "green"},
	{ key: "2", icon : "mood_bad", title: "What can be improved?", color: "red"},
	{ key: "3", icon : "whatshot", title: "Actions", color: "yellow"}
];

export var MESSAGES : Message[] = [];
