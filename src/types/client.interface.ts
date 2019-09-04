import { ModuleBase } from '../core/module/module-base';
import { Client } from 'discord.js';
import { CommandOptions } from '../common/decorators/command.decorator';

export default interface IClient {
  /**
   * new Discord().Client() from discord-js
   */
  discordJsClient: Client;

  /**
   * Should authenticate the client
   */
  login: () => boolean;

  /**
   * Initializes an event listener
   */
  initEvent(onMessage: string, moduleInstance: ModuleBase, handler: () => any);

  /**
   * Initializes a command listener
   */
  initCommand(
    command: { value: string; options: CommandOptions },
    moduleInstance: ModuleBase,
    handler: () => any
  );
}
