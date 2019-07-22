'use strict';

const { createBuilder, createTempDir } = require('broccoli-test-helper');
const sinon = require('sinon');
const { assert } = require('chai');
const liveServer = require('live-server');
const Plugin = require('../index');

describe('broccoli-live-server', () => {
  let liveServerStub;

  beforeEach(() => {
    liveServerStub = sinon.stub(liveServer, 'start');
  });

  afterEach(() => {
    liveServerStub.restore();
  });

  it('starts a live server with default options', async() => {
    const input = await createTempDir();
    const subject = new Plugin(input.path());
    const output = createBuilder(subject);

    await output.build();

    const defaultOptions = {
      open: false,
      ignore: /.*\.map/
    };

    const expectedArguments = Object.assign({}, defaultOptions, {
      root: input.path()
    });

    assert.ok(liveServerStub.calledWith(expectedArguments));
  });

  it('starts a live server with custom options', async() => {
    const input = await createTempDir();
    const customOptions = { foo: 'bar' };
    const subject = new Plugin(input.path(), customOptions);
    const output = createBuilder(subject);

    await output.build();

    const callArguments = liveServerStub.getCall(0).args[0];

    assert.include(callArguments, customOptions);
  });

  it.skip('does not start a new server if there is one running');
});
