// include mongoose in our project and open a connection to the test database on our locally running instance of MongoDB.
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

// We have a pending connection to the test database running on localhost. We now need to get notified if we connect successfully or if a connection error occurs:
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  // we're connected!
  console.log('Connected to MongoDB');
});

// With Mongoose, everything is derived from a Schema.
var kittySchema = mongoose.Schema({
  name : String
});

// Kittens can meow, so let's take a look at how to add "speak" functionality to our documents
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
  var greeting = this.name
    ? 'Meow name is ' + this.name
    : 'I don\'t have a name';
  console.log(greeting);
}

// Now we compile our schema into a Model
var Kitten = mongoose.model('Kitten', kittySchema);

module.exports = Kitten;