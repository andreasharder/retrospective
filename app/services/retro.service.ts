import {Injectable} from 'angular2/core';

@Injectable()
export class RetroService {

	private _topic: string;

	public setTopic(topic: string){
		this._topic = topic;
	}

	public getTopic(): String{
		return this._topic;
	}

	public getColumns(): BoardColumn[]{
		return COLUMNS;
	}

	public getMessages(key : string): Message[]{
		var column = this._getColumnByKey(key);
		return column.messages;
	}

	public addMessage(msgText: string, key: string){
		var column = this._getColumnByKey(key);
		var msg: Message = {
			text : msgText
		};
		column.messages.push(msg);
	}

	private _getColumnByKey(key: string){
		var column = COLUMNS.find((c, i) => {
			if(c.key === key){
				return true;
			}
		});
		return column;
	}
}

export interface Message{
	text:string;
}

export interface BoardColumn{
	key:string;
	icon:string;
	title:string;
	color:string;
	messages: Message[];
}

export var COLUMNS : BoardColumn[] = [
	{ key: "1", icon : "mood", title: "What went well?", color: "green", messages: []},
	{ key: "2", icon : "mood_bad", title: "What can be improved?", color: "red", messages: []},
	{ key: "3", icon : "whatshot", title: "Actions", color: "yellow", messages: []}
];
