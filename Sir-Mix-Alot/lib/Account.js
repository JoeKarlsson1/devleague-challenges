'use strict'

const Model = require('./Model.js');
const User  = require('./User.js');

function Account(){
  const AccountSchema = {
    user : User,
    accountNumber : Number,
    address : String,
    balance : Number
  };
  Model.call(this,AccountSchema);
}

Model.extend(Account);

module.exports = Account;
