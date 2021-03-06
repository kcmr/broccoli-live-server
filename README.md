# broccoli-live-server

[![Build Status](https://travis-ci.com/kcmr/broccoli-live-server.svg?branch=master)](https://travis-ci.com/kcmr/broccoli-live-server)
[![npm version](https://badge.fury.io/js/broccoli-live-server.svg)](https://badge.fury.io/js/broccoli-live-server)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![codecov](https://codecov.io/gh/kcmr/broccoli-live-server/branch/master/graph/badge.svg)](https://codecov.io/gh/kcmr/broccoli-live-server)
[![Greenkeeper badge](https://badges.greenkeeper.io/kcmr/broccoli-live-server.svg)](https://greenkeeper.io/)
![Dependency status](https://img.shields.io/david/kcmr/broccoli-live-server.svg)

Starts a [Live Server](https://github.com/tapio/live-server) from a Broccoli tree.

## Install

```sh
npm i -D broccoli-live-server
```

## Usage

```js
const LiveServer = require('broccoli-live-server');

const tree = funnel('src');
const server = new LiveServer(tree);

return mergeTrees([tree, server]);
```

## API

### LiveServer(tree, [options])

#### options

Type: `Object`   
Default: 
```js
{
  open: false,
  ignore: /.*\.map/
}
```

See [Live Server options](https://github.com/tapio/live-server#usage-from-node).   

Note: the `root` option is set by the plugin to the input path.

## License

This project is licensed under the [MIT License](LICENSE).
