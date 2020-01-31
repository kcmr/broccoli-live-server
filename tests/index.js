const { createBuilder, createTempDir } = require('broccoli-test-helper');
const sinon = require('sinon');
const { assert } = require('chai');
const liveServer = require('live-server');
const Plugin = require('../index');

async function initPlugin(options) {
  const input = await createTempDir();
  const inputPath = input.path();
  const subject = new Plugin(inputPath, options);
  const output = createBuilder(subject);

  await output.build();

  return { inputPath, output };
}

describe('broccoli-live-server', () => {
  let liveServerStub;

  beforeEach(() => {
    liveServerStub = sinon.stub(liveServer, 'start').returns(true);
  });

  afterEach(() => {
    liveServerStub.restore();
  });

  it('starts a live server with default options', async () => {
    const { inputPath } = await initPlugin();

    const defaultOptions = {
      open: false,
      ignore: /.*\.map/,
    };

    const expectedArguments = { ...defaultOptions, root: inputPath };

    assert.ok(liveServerStub.calledWith(expectedArguments));
  });

  it('starts a live server with custom options', async () => {
    const customOptions = { foo: 'bar' };
    await initPlugin(customOptions);

    const callArguments = liveServerStub.getCall(0).args[0];

    assert.include(callArguments, customOptions);
  });

  it('does not start a new server if there is one running', async () => {
    const { output } = await initPlugin();
    await output.build();

    assert.ok(liveServerStub.calledOnce);
  });
});
