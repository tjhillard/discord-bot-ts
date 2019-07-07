# discord-bot-ts

- Decorators for declarative syntax 🛋
- Dependency injection support 💉
- Modular structure for project scalability 🏗
- Runtime exception handling 👷‍
- Useful enums for event types 🎟

```ts
export default class MainModule extends Module {
  constructor() {
    super(new Client(process.env.DISCORD_TOKEN), { commandPrefix: '!' });

    this.client.login();
  }

  /**
   *
   * On !greet command
   *
   */
  @Command('greet')
  public greetUser(message: Message) {
    this.client.sendMessage(
      message.channel,
      `Hi ${message.author.username}! 👋`
    );
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
}
```

## Installation

```
yarn add discord-bot-ts
```

## Basic Setup

> index.ts (entry point)

```ts
const app = new App({
  modules: [
    MainModule,
  ],
  onStart() {
    console.log('Application running! 🎉');
  }
});

app.start();
```

>main.module.ts

```ts
import { Module, Client, Command } from 'discord-bot-ts';
import { Message } from 'discord-js';

export default class MainModule extends Module {
  constructor() {
    super(new Client(process.env.TOKEN));
    this.client.login();
  }

  @Command('ping')
  onPing(message: Message) {
    this.client.sendMessage(message.channel, 'pong!');
  }
}
```