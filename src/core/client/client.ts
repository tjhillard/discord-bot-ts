import { Client as DiscordJsClient } from 'discord.js';
import { ModuleBase } from '../module/module-base';
import IClient from '../../types/client.interface';
import { Event } from '../../common/events.enum';
import { CommandOptions } from '../../common/decorators/command.decorator';

export class Client implements IClient {
	/**
	 * Public reference to Discord.js client object
	 */
	public discordJsClient: DiscordJsClient = new DiscordJsClient();

	constructor(private token: string) {}

	/**
	 * Authenticates bot with given token
	 * @returns `true` if successful, `false` if failure.
	 */
	public login(): boolean {
		try {
			this.discordJsClient.login(this.token);
			return true;
		} catch (err) {
			console.error(err);
			return false;
		}
	}

	/**
	 * @description Initializes an onEvent listener with discordjs
	 * @param event
	 * @param moduleInstance
	 * @param handler
	 */
	initEvent(event: any, moduleInstance: ModuleBase, handler: () => any): void {
		this.discordJsClient.on(event.name, (...args) => {
			if (event.filter) {
				if (event.filter(...args)) {
					handler.call(moduleInstance, ...args);
					return;
				}
			} else {
				handler.call(moduleInstance, ...args);
			}
		});
	}

	/**
	 * @description Initializes a command with discordjs
	 * @param command
	 * @param moduleInstance
	 * @param handler
	 */
	initCommand(command: { value: string, options: CommandOptions }, moduleInstance: ModuleBase, handler: () => any) {
		if (!command.value) { return; }
		const options: any = command.options;
		const prefix = options && options.prefix ? options.prefix : moduleInstance.config.commandPrefix;
		const stringToMatch: string = `${prefix}${command.value}`;

		this.discordJsClient.on(Event.MESSAGE_CREATE, (message) => {
			if (message.content === stringToMatch) {
				handler.call(moduleInstance, message);
			}
		});
	}
};
