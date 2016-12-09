var fs = require('fs');
var Transform = require('stream').Transform;
var inherits = require('util').inherits;

// Data event listener that console logs the data
// bears.on('data', function(data) {
//   console.log(data.toString())
// });

// Use pipe and stdout to pipe out the stream data
//bears.pipe(process.stdout);


//pipe bears to the actual bears file
// bears.pipe(actualBears);


//Transform function
function ActualBears () {
  Transform.call(this);
}
inherits(ActualBears, Transform)


ActualBears.prototype._transform = function(chunk, enc, done) {
  chunk = chunk.toString().split('\n').filter(function(bear) {
    return (bear !== 'koala')
  }).join('\n');
  this.push(chunk);
  done();
}

//create a new read stream
var read = fs.createReadStream('bears.txt');
//create a write stream
var write = fs.createWriteStream('actualBears.txt');

read.pipe(new ActualBears()).pipe(write);