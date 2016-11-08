var Robot = function (name) {
  this.name = name;
}

function add ( op1, op2 ) {
  console.log(this, 'THIS');
  this.name = this.name || 'Humans';
  return this.name + ' can count to ' + (op1 + op2);
}

var johnnyFive = new Robot('Johnny Five');
var optimus = new Robot('Optimus Prime');
var HAL = new Robot('HAL');

// console.log(johnnyFive);
// console.log(optimus);
// console.log(add(1, 2));

// console.log( add.call( johnnyFive, 4, 5 ));
console.log( add.apply( HAL, [ 6, 5 ] ));

// var calculate = add.bind(optimus);

// console.log(calculate('drinking ', 'beer'));
