function extend(destination, source) {
  for (var k in source) {
    // hasOwnProperty only shallow checks for methods or properties
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

function Taco() {};
Taco.prototype.eat = function() {
  console.log('Eatting...')
};

function Beans() {
  this.tasty = 10;
};
Beans.prototype.cook = function() {
  console.log('Bean Cooking...')
};
Beans.prototype.mash = function() {
  console.log('Mashing...')
};

function Guacomole() {}
Guacomole.prototype.spread = function() {
    console.log('Spreading...')
};

//------------------------------v Source
// ------------v Destination
extend(Taco.prototype, Beans.prototype);
var newTaco = new Taco();

console.log(newTaco);
