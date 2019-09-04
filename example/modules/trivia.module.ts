import { Message } from 'discord.js';
import MainModule from '../main.module';
import { Command } from '../../src/common/decorators/command.decorator';
import { Event } from '../../src/common/enums/events.enum';
import { On } from '../../src/common/decorators/on.decorator';

export default class TriviaModule extends MainModule {
  private question: string;
  private answer: string;

  @Command('trivia')
  public askTriviaQuestion(message: Message) {
    this.question =
      'what is the average airspeed velocity of an unladen swallow?';
    this.answer = 'An African or European swallow?';

    message.channel.send(this.question);
  }

  @On(Event.MESSAGE_CREATE)
  public checkAttemptedTriviaAnswer(message: Message) {
    if (message.content === this.answer) {
      message.channel.send("I don't know that... RRAAHHHHHGHHHHGHGHHGHH");
    }
  }
}
