var chai = require('chai');
var expect = chai.expect;
chai.should();

var chirp = require('./../chirp.js');

describe('Chirp', function () {
  it('should be a module that exists', function () {
    expect(chirp).to.be.a('function');
  });
});