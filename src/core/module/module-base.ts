import IClient from '../../types/client.interface';
import { getPropertiesOfObjectPrototype } from '../../utils';

export class ModuleBase {
  constructor(
    protected readonly client: IClient,
    public readonly config?: { commandPrefix?: string }
  ) {
    this.initEvents();
  }

  protected initEvents() {
    getPropertiesOfObjectPrototype(this).forEach(methodName => {
      if (Reflect.hasMetadata('on:command', this, methodName)) {
        this.client.initCommand(
          Reflect.getMetadata('on:command', this, methodName),
          this,
          this[methodName]
        );
      }

      if (Reflect.hasMetadata('on:event', this, methodName)) {
        this.client.initEvent(
          Reflect.getMetadata('on:event', this, methodName),
          this,
          this[methodName]
        );
      }
    });
  }

  protected loginAllClients() {
    try {
      this.client.login();
    } catch (err) {
      // console.log('Logger.logError(client.name, Failed login, err);');
    }
  }
}
