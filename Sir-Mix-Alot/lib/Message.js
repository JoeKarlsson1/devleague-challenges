'use strict'

const Model = require('./Model.js');
const User  = require('./User.js');

function Message(){
  const MessageSchema = {
    from : User,
    to : User,
    message : String,
    sent : Date
  };
  Model.call(this,MessageSchema);
  Model.extend(Message);
};

module.exports = Message;
