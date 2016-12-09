function extend(destination, source) {
  for (var k in source) {
      // console.log(k)

    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

function Taco() {};
Taco.prototype.eat = function() {
  /*do stuff*/
  console.log('Eatting...')

};

function Beans() {};
Beans.prototype.cook = function() {
  /*do stuff*/
  console.log('Cooking...')
};

function Guacomole() {}
Guacomole.prototype.spread = function() {
  /*do stuff*/
    console.log('Spreading...')

};

extend(Taco.prototype, Beans.prototype);
// extend(Taco.prototype, Guacomole.prototype);

console.log(Taco);
