import IModule from './module.interface';
import { App } from '../core/app/app';

export type ApplicationConfig = {
  modules: IModule[];
  onStart?: (app: App) => void;
};
