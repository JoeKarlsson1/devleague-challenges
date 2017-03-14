// Post hoisted
function two(){
  return 'dos';
}

var one;
var three;

console.log(one);

one = 'uno';

console.log(two())
console.log(three());

three = function() {
  var four;
  console.log(four());

  four = function() {
    return 'quatro';
  }

  return 'tres';
};
