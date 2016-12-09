var Robot = function (name) {
  this.name = name;
}

function add ( op1, op2 ) {
  this.name = this.name || 'Humans';
  return this.name + ' can count to ' + (op1 + op2);
}



var voltron = new Robot('Voltron');
console.log(voltron);
console.log(bender);
var bender = new Robot('Bender Rodriguez');
var optimus = new Robot('Optimus Prime');
var megaman = new Robot('Mega Man');
var bmo = new Robot('B-Mo');
var wall_e = new Robot('Wall-E');

// #1
console.log( add( 0, 1 ) );

// #2
console.log( add.call(voltron, 2, 3) );

// #3
console.log( add.apply(optimus, [ 20, 30 ] ) );

// #4

// create a function just for bender
var calculate = add.bind(bender);
 // outputs "person1:Nicholas"

console.log( calculate('drinking', 'beer') );

console.log( calculate('drinking', 'soda') );