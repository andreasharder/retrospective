import {RetroService, BoardColumn} from './retro.service';

describe('RetroService', () => {

	var service: RetroService;

	beforeEach(()=>{
		service = new RetroService();
	})

	it('should return topic', () => {
		service.addBoard("testTopic", "1bfj");
		expect(service.getTopic()).toBe("testTopic");
	});

	it('should return message from board', () => {
		var key = "1";
		var msgText = "testMsg";

		service.addMessage(msgText, key);
		expect(service.getMessages(key).length).toEqual(1);
	})
});
