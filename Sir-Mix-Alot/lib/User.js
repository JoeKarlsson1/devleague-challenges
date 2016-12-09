'use strict'

const Model = require('./Model.js');

function User(){
 const UserSchema = {
    username : String,
    password : String
  };

  Model.call(this,UserSchema);
};

Model.extend(User);

module.exports = User;