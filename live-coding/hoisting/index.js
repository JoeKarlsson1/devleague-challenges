// Pre hoised
console.log(one);

var one = 'uno';

console.log(two())

// declaration
function two(){
  return 'dos';
}

// Assignments
var three = function() {
  console.log(four());
  return 'tres';

  var four = function() {
    return 'quatro';
  }
};

console.log(three());
