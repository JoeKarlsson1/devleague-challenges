function extend(destination, source) {
  // for...in loops iterate through keys in an object
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

function Beans () {
  this.spiceLevel = 100;
};
Beans.prototype.cook = function() {
  console.log('Cooking...');
};

function Guacamole () {};
Guacamole.prototype.spread = function() {
  console.log('Spreading...');
};

function Taco () {

  // Attaches properties from beans to taco
  Beans.call(this);
};
Taco.prototype.eat = function() {
  console.log('Eating ...');
};

// Attach methods from parent/source class to the child/destination class
extend(Taco.prototype, Beans.prototype);
extend(Taco.prototype, Guacamole.prototype);

let tastyTaco = new Taco();
console.log(tastyTaco.spread());