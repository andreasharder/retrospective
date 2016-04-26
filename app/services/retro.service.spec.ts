import {RetroService, BoardColumn} from './retro.service';

describe('RetroService', () => {

	var service: RetroService;

	beforeEach(()=>{
		service = new RetroService();
	})

	it('should return topic', () => {
		service.setTopic("testTopic");
		expect(service.getTopic()).toBe("testTopic");
	});

	it('should return messages from board', () => {
		var key = "1";
		var msgText = "testMsg";
		service.addMessage(msgText, key);
		expect(service.getMessages(key)).toEqual([{ text: msgText}]);
	})

	it('should add maximum five messages to board', () => {
		var key = "1";
		var msgText = "testMsg";

		for(let i = 0; i < 10; i++){
			service.addMessage(msgText, key);
		}
		expect(service.getMessages(key).length).toEqual(5);
	})
});
