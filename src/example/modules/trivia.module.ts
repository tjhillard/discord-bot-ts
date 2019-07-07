import { Message } from "discord.js";
import MainModule from "../main.module";
import { Command } from "../../common/decorators/command.decorator";
import { Event } from "../../common/events.enum";
import { On } from "../../common/decorators/on.decorator";

export default class TriviaModule extends MainModule {
	private question: string;
	private answer: string;

	@Command('trivia')
	public askTriviaQuestion(message: Message) {
		this.question = 'what is the average airspeed velocity of an unladen swallow?';
		this.answer = 'An African or European swallow?';

		message.channel.sendMessage(this.question);
	}

	@On(Event.MESSAGE_CREATE)
	public checkAttemptedTriviaAnswer(message: Message) {
		if (message.content === this.answer) {
			message.channel.sendMessage('I don\'t know that... RRAAHHHHHGHHHHGHGHHGHH');
		}
	}
}
