import { Message } from 'discord.js';
import MainModule from '../main.module';
import GifService from '../services/gif.service';
import { Inject } from '../../src/common/decorators/inject.decorator';
import { Command } from '../../src/common/decorators/command.decorator';

@Inject(GifService)
export default class RandomModule extends MainModule {
  constructor(private readonly gifService) {
    super();
  }

  @Command('gif')
  sendRandomGif(message: Message) {
    message.channel.send(this.gifService.getRandomGif());
  }
}
