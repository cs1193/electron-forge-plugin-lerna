import PluginBase from '@electron-forge/plugin-base';

import { asyncOra } from '@electron-forge/async-ora';
import Logger from '@electron-forge/web-multi-logger';

import debug from 'debug';
import fse from 'fs-extra';

const d = debug('electron-forge:plugin:lerna');

const DEFAULT_LOGGER_PORT = 45001;

export interface ILernaPlugin {}

export default class LernaPlugin extends PluginBase<ILernaPlugin> {
  name = 'lerna';

  private log: Logger;

  private loggerPort: number = DEFAULT_LOGGER_PORT;

  constructor(opts: ILernaPlugin) {
    super(opts);

    d('lerna-plugin:init');

    this.log = new Logger(this.loggerPort);
  }
}
