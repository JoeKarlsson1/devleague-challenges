'use strict'

const GameConsole = require('./GameConsole');
const WebBrowser = require('./WebBrowser');

function extend( destination, source ) {
  for (let k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

extend( NintendoDS.prototype, WebBrowser.prototype );
extend( NintendoDS.prototype, GameConsole.prototype );

function NintendoDS(){
  GameConsole.call(this,'Nintendo DS');
  WebBrowser.call(this);
}

module.exports = NintendoDS;
