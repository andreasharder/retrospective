import {Injectable} from 'angular2/core';

@Injectable()
export class UtilService{

	public getNewBoardId():string{

		var text = "";
        var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < 5; i++ ) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
	}

	public getBoardId():string{
		var split = window.location.pathname.split("/");
		return split[2];
	}
}
