'use strict'

const Watch = require('./Watch.js');
const Tablet = require('./Tablet.js');

function extend(destination, source) {
  for (let k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

extend(SmartWatch.prototype,Watch.prototype);
extend(Tablet.prototype,Tablet);

function SmartWatch() {
  Watch.call(this);
  Tablet.call(this);
}

module.exports = SmartWatch;
