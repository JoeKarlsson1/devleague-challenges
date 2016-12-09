var EventEmitter = require('events');
var util = require('util');

function Timer () {
  EventEmitter.call(this);

  var self = this;
  let i = 0;
  setInterval(function () {
    self.emit('tick', { interval : i++ });
  }, 1000);
}

util.inherits(Timer, EventEmitter);

var myTimer = new Timer();

myTimer.addListener('tick', function(event){
  process.stdout.write(`tick ${event.interval}\n`);
});
