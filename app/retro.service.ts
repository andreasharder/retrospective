import {Injectable} from 'angular2/core';

@Injectable()
export class RetroService {

	private _topic: string;

	public setTopic(topic: string){
		this._topic = topic;
	}

	public getTopic():String{
		return this._topic;
	}
}
