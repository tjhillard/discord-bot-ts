import { ApplicationConfig } from '../../types/application-config.type';

export class App {
  constructor(private config: ApplicationConfig) {}

  public start() {
    for (const module of this.config.modules) {
      try {
        const toInject =
          Reflect.getMetadata('toInject', module.prototype) || [];
        try {
          new module(...toInject);
        } catch (err) {
          console.error(err);
        }
      } catch (err) {
        console.error(err);
      }
    }

    this.config.onStart(this);
  }
}
