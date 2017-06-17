var chai = require('chai');
var assert = chai.assert;
var program = require('./Is my friend cheating?.js')

describe('this program', () => {
  it('should return 2 pairs', () => {
    assert.deepEqual(program.removeNb(26), [[15, 21], [21, 15]]);
  });
  it('should retuen []', () => {
    assert.deepEqual(program.removeNb(27), []);
  });
});

