var chai = require('chai');
var expect = chai.expect;

var pigLatin = require('./../pigLatin');

describe('Pig Latin Phrase', () => {
  it('should be a function that exists', () => {
    expect(pigLatin.pigPhrase).to.be.a('function');
  });
  it('should pigify a phrase', () => {
    expect(pigLatin.pigPhrase('eat')).to.equal('eat-ay');
    expect(pigLatin.pigPhrase('banana')).to.equal('anana-bay');
    expect(pigLatin.pigPhrase('Translate me into Pig Latin please!')).to.equal('anslate-Tray e-may into-ay ig-Pay atin-Lay ease!-play');
  });
  it('should throw an error if the parameter is not a string', () => {
    expect(pigLatin.pigPhrase.bind(this,false)).to.throw(Error);
    expect(pigLatin.pigPhrase.bind(this, '')).to.throw(Error);
  });
});


describe('Unpig Latin Pharase', () => {
  it('should be a function that exists', () => {
    expect(pigLatin.unpigPhrase).to.be.a('function');
  });
  it('should unpigify a phrase', () => {
    expect(pigLatin.unpigPhrase('eat-ay')).to.equal('eat');
    expect(pigLatin.unpigPhrase('anana-bay')).to.equal('banana');
    expect(pigLatin.unpigPhrase('anslate-Tray e-may into-ay ig-Pay atin-Lay ease!-play')).to.equal('Translate me into Pig Latin please!');
  });
  it('should throw an error if the parameter is not a string', () => {
    expect(pigLatin.pigPhrase.bind(this, '')).to.throw(Error);
    expect(pigLatin.unpigPhrase.bind(this,false)).to.throw(Error);
  });
});
