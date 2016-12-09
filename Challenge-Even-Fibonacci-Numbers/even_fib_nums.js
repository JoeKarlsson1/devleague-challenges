/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * F_n=F_(n-1)+F_(n-2)
 * The Fibonacci numbers for n=1, 2, ... are 1, 1, 2, 3, 5, 8, 13, 21,
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */

module.exports = {
  sumFibs : _sumFibs
 };

function _sumFibs( maxFibValue ) {
  //track sum of all even fibon
  var sum = 0;

  //Initialize fibonacci sequence for a=1 and b=2
  var a = 1; //F_(n-2)
  var b = 2; //F_(n-1)

  //If maxFibValue is less than two - it cannot be a fibonacci - return 0
  if ( maxFibValue < 2 ) {
    return 0;
  }

  //else, loop through all nums from 2 to maxFibValue
  for (var i = 2; a <= maxFibValue; i++) {
    //F_n = F_(n-2) + F_(n-1) = b is the new fibonacci num
    b = a + b;

    //Check if F_(n-2) is even
    if ( (a % 2) === 0 ) {
      //If it's even, add it to our sum
      sum += a;
    }

    a = b - a;
  }
  return sum;
}

// omg dis link tho -> https://medium.com/@scottibiscotti1/calculating-the-nth-fibonacci-number-in-javascript-c3656250f626
//
console.log(_sumFibs(4000000));