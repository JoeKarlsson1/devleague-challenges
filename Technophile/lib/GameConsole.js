'use strict'

function GameConsole(systemName){
  this.systemName = systemName;
  this.play = function(game){
    return this.systemName +' plays '+ game.title;
  }
}

module.exports = GameConsole;
