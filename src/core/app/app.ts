import IModule from "../../types/module.interface";

export type ApplicationConfig = {
	modules: IModule[];
	onStart?: (app: App) => void;
};

export default class App {
	constructor(private config: ApplicationConfig) {}

	public start() {
		for (const module of this.config.modules) {
			try {
				const toInject = Reflect.getMetadata('toInject', module.prototype) || [];
				new module(...toInject);
			} catch (err) {
				console.error(err);
			}
		}

		this.config.onStart(this);
	}
};
