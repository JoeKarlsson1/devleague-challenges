'use strict'

function Phone(phoneNumber){
  this.phoneNumber = phoneNumber;
  this.callPhone = function(otherNumber){
    return this.phoneNumber+' calls '+otherNumber;
  }
}

module.exports = Phone;
