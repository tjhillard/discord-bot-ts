import 'reflect-metadata';
import 'dotenv/config';
import { Message, MessageReaction } from 'discord.js';

import { ModuleBase } from '../core/module/module-base';
import { Client } from '../core/client/client';
import { On } from '../common/decorators/on.decorator';
import { Event } from '../common/events.enum';
import { Command } from '../common/decorators/command.decorator';

export default class MainModule extends ModuleBase {
	constructor() {
		super(
			new Client(process.env.DISCORD_TOKEN),
			{ commandPrefix: '!' },
		);

		this.client.login();
	}

	/**
	 *
	 * On client ready
	 *
	 */
	@On(Event.CLIENT_READY)
	public onReady() {
		console.log('Bot online! 🚀');
	}

	/**
	 *
	 * On !greet command
	 *
	 */
	@Command('greet')
	public greetUser(message: Message) {
		message.channel.sendMessage(`Hi ${message.author.username}! 👋`);
	}

	/**
	 *
	 * On reaction added
	 *
	 */
	@On(Event.MESSAGE_REACTION_ADD)
	public onRoleUpdate(reaction: MessageReaction) {
		reaction.message.channel.sendMessage(
			`${reaction.emoji.name} reaction added to message_id: \`${reaction.message.id}\``
		);
	}

	/**
	 *
	 * On any message received that matches filter
	 *
	 */
	@On(
		Event.MESSAGE_CREATE,
		(message: Message) => message.content === 'foobar',
	)
	public handleMessageCreate(message: Message) {
		message.channel.send('0101');
	}

	/**
	 *
	 * On !commands
	 *
	 */
	@Command('commands')
	public sendUserCommandsMessage(message: Message) {
		message.author.sendMessage('I\'m hitting you up in the DMs');
	}
};
