'use strict'

const Model = require('./Model.js');

function Location(){
  const LocationSchema = {
    lng : Number,
    lat : Number
  };
  Model.call(this,LocationSchema);
  Model.extend(Location);
};

module.exports = Location;
