var Kitten = require('./Kitten')

var silence = new Kitten({ name : 'Silence' });
console.log(silence.name); // 'Silence'

var fluffy = new Kitten({ name : 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"

// We still haven't saved anything to MongoDB. Each document can be saved to the database by calling its save method.
fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
  fluffy.speak();
});

// We can access all of the kitten documents through our Kitten model
Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
});

Kitten.find({ name : /^Fluff/ }, function(err, kittens) {
  console.log(kittens);
});