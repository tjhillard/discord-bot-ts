import { App } from '../src/core';
import MainModule from './main.module';
import TriviaModule from './modules/trivia.module';
import RandomModule from './modules/random.module';

const app = new App({
  modules: [MainModule, TriviaModule, RandomModule],
  onStart() {
    console.log('Application running! 🎉');
  },
});

app.start();
