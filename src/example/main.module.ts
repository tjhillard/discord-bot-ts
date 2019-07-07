import 'reflect-metadata';
import 'dotenv/config';
import { Message, MessageReaction } from 'discord.js';

import { Module } from '../core/module/module';
import { Client } from '../core/client/client';
import { On } from '../common/decorators/on.decorator';
import { Event } from '../common/events.enum';
import { Command } from '../common/decorators/command.decorator';
import { Inject } from '../common/decorators/inject.decorator';

@Inject('foo')
export default class MainModule extends Module {
	constructor(private weatherService: any) {
		super(
			new Client(process.env.DISCORD_TOKEN),
			{ commandPrefix: '!' },
		);

		this.client.login();

		console.log(this.weatherService);
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
		this.client.sendMessage(message.channel, `Hi ${message.author.username}! 👋`);
	}

	/**
	 *
	 * On reaction added
	 *
	 */
	@On(Event.MESSAGE_REACTION_ADD)
	public onRoleUpdate(reaction: MessageReaction) {
		this.client.sendMessage(
			reaction.message.channel,
			`${reaction.emoji.name} reaction added to message_id: \`${reaction.message.id}\``,
		);
	}

	/**
	 *
	 * On any message received
	 *
	 */
	@On(Event.MESSAGE_CREATE)
	public handleMessageCreate(message: Message) {
		if (message.content === 'foobar') {
			this.client.sendMessage(message.channel, '0101');
		}
	}
};
