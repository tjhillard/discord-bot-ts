import MainModule from "./main.module";
import App from "../core/app/app";

const app = new App({
	modules: [
		MainModule,
	],
	onStart() {
		console.log('Application running! 🎉');
	},
});

app.start();
