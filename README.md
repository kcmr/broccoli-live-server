# broccoli-live-server

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

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
