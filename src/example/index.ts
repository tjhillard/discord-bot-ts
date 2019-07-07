import MainModule from "./main.module";
import App from "../core/app/app";
import TriviaModule from "./modules/trivia.module";
import RandomModule from "./modules/random.module";

const app = new App({
	modules: [
		MainModule,
		TriviaModule,
		RandomModule,
	],
	onStart() {
		console.log('Application running! 🎉');
	},
});

app.start();
