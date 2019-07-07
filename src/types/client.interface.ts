import { Module } from "../core/module/module";
import { Client } from "discord.js";
import { CommandOptions } from "../common/decorators/command.decorator";

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
	initEvent(onMessage: string, moduleInstance: Module, handler: () => any);

	/**
	 * Initializes a command listener
	 */
	initCommand(command: { value: string, options: CommandOptions }, moduleInstance: Module, handler: () => any);

	/**
	 * Should send a message
	 */
	sendMessage: (messageObject: any, response: string) => boolean;
};
