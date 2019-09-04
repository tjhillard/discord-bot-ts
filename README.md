# discord-bot-ts

🤖 A TypeScript wrapper around Discord.js that enables the building of large, scalable discord bots. Inspired by Nest.js and Angular, this library encourages SOLID object-oriented design through the use of runtime dependency injection, metadata reflection, and the service provider pattern.

- Decorators for declarative syntax 🛋
- Runtime Dependency injection support 💉
- Modular structure for better organizaed projects 🏗
- Useful enums for event types 🎟

## Installation

```
yarn add discord-bot-ts
```

## Getting Started

> index.ts (entry point)

Your `index.ts` is the main entry point of your application. Your application consists of at least one "MainModule" and as many other sub-class modules as you want. You define them all here for runtime instantiation.

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

Your main modules's primary responsibility should be authenticating your bot. Pass a `Client` instance with the token in the constructor and then call `login()` on the `this.client` property. The main module might also be a good place to add global on state change events, such as `Event.CLIENT_READY`.

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
    message.channel.send('pong');
  }
}
```

## Example Application

Say you want to create a general purpose bot applicaiton with trivia questions and make some fun RNG stuff like random GIFs. Let's start by setting up our folder stucture.

```
. index.ts
. main.module.ts
. modules/
  - trivia.module.ts
  - random.module.ts
. services/
  - gif.service.ts
```
First, let's make our trivia module.

>modules/trivia.module.ts
```ts
// imports...

export default class TriviaModule extends MainModule {
  private question: string;
  private answer: string;

  @Command('trivia')
  public askTriviaQuestion(message: Message) {
    this.question = 'what is the average airspeed velocity of an unladen swallow?';
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
```

`Services` are singletons that should encapsulate implementaiton deatils of reusable functionality. Since getting a GIF from a 3rd party API might be something that we'll want to in many different modules down the road, it's a perfect use case for a Service. Let's make it.

> services/gif.service.ts
```ts
class GifService {
  public getRandomGif() {
    // Hit some API, get random gif
    return 'http://gph.is/S5UMDD';
  }
};

export default new GifService();
```

Now the module.

> modules/random.module.ts
```ts
// imports...
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
```

As you can see we are injecting our `GifService` dependency into our class at runtime instantiation via the `@Inject` decorator. We then set it as a `private readonly` property in the constructor and have access to it anywhere in our class via `this.gifService`. Cool!
