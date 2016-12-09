'use strict'

const Phone = require('./Phone.js');
const Tablet = require('./Tablet.js');
const GameConsole = require('./GameConsole');
const WebBrowser = require('./WebBrowser');

function extend(destination, source) {
  for (let k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
};

extend(SmartPhone.prototype,WebBrowser.prototype);

function SmartPhone(phoneNumber){
  Tablet.call(this);
  Phone.call(this,phoneNumber);
  GameConsole.call(this,'Smart Phone');
  WebBrowser.call(this);
};

module.exports = SmartPhone;
