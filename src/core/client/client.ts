import { Client as DiscordJsClient, TextChannel } from 'discord.js';
import { Module } from '../module/module';
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

	initEvent(event: any, moduleInstance: Module, handler: () => any) {
		this.discordJsClient.on(event.name, (...args) => {
			handler.call(moduleInstance, ...args);
		});
	}

	initCommand(command: { value: string, options: CommandOptions }, moduleInstance: Module, handler: () => any) {
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

	sendMessage(channel: TextChannel, response: string): boolean {
		try {
			channel.send(response);
			return true;
		} catch (err) {
			// console.error(err); // TOOD Logger Class
			return false;
		}
	}
};
