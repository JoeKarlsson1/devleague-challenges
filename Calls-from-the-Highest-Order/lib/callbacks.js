const data = require('./datastore.js');

function wait(seconds, cb) {
  setTimeout(cb, seconds*1000)
}

function repeat (times, cb) {
  var i = 0;
   while (i < times) {
     cb();
     i++;
   }
}

function User () {

}

User.find = (query, cb) => {

}

module.exports = {
  wait : wait,
  repeat : repeat,
  User : User
};