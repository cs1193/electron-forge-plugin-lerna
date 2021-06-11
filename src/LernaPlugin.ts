// @ts-nocheck

import PluginBase from '@electron-forge/plugin-base';

import { PackageGraph } from '@lerna/package-graph';

// import { asyncOra } from '@electron-forge/async-ora';

import debug from 'debug';
// import fse from 'fs-extra';

const d = debug('electron-forge:plugin:lerna');

export interface ILernaPlugin {}

export default class LernaPlugin extends PluginBase<ILernaPlugin> {
  name = 'lerna';

  constructor(opts: ILernaPlugin) {
    super(opts);

    d('lerna-plugin:init');

    this.getHook = this.getHook.bind(this);
  }

  getHook(name: string): Function {
    switch (name) {
      default:
        return null;
    }
  }

  async startLogic(): Promise<false> {
    return null;
  }
}
