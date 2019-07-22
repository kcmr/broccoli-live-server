'use strict';

const { createBuilder, createTempDir } = require('broccoli-test-helper');
const sinon = require('sinon');
const assert = require('assert');
const liveServer = require('live-server');
const Plugin = require('../index');

describe('broccoli-live-server', () => {
  it('starts a live server with default options', async() => {
    const input = await createTempDir();
    const subject = new Plugin(input.path());
    const output = createBuilder(subject);
    const liveServerStub = sinon.stub(liveServer, 'start');

    await output.build();

    const defaultOptions = {
      open: false,
      ignore: /.*\.map/
    };

    const expectedArguments = Object.assign({}, defaultOptions, {
      root: input.path()
    });

    // console.log(liveServerStub.getCall().args);
    console.log(liveServerStub.getCall(0).args);

    assert.ok(liveServerStub.calledWith(expectedArguments));
  });

  it.skip('starts a live server with custom options');

  it.skip('does not start a new server if there is one running');
});
