'use strict'

function Watch(){
  this.bodyPart = null;
  this.wear = function(bodyPart){
    this.bodyPart = bodyPart;
  }
}


module.exports = Watch;
