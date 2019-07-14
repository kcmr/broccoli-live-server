'use strict';

const Plugin = require('broccoli-plugin');
const extend = require('deep-extend');
const liveServer = require('live-server');

class BroccoliLiveServer extends Plugin {
  constructor(inputNode, options = {}) {
    super([inputNode], {
      annotation: 'BroccoliLiveServer'
    });

    const defaults = {
      open: false,
      ignore: /.*\.map/
    };

    this.options = extend(defaults, options);
  }

  createServer(dir) {
    this.options.root = dir;
    this.server = liveServer.start(this.options);
  }

  build() {
    if (this.server) {
      return;
    }

    this.createServer(this.inputPaths[0]);
  }
}

module.exports = BroccoliLiveServer;
