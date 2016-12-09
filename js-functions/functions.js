/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

function numberToString(num) {
  return num.toString();
}

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

function increase(num) {
  return num += 1;
}

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

function decrease(num) {
  return num -= 1;
}

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

function add(x, y) {
  var sum = x + y;
    return sum;
}

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

function subtract(x, y) {
  return x - y;
}

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

function multiply(x, y) {
  return x * y;
}

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

function divide(x, y) {
  return x / y;
}

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

function square(num) {
  return num * num;
}

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

function calculate(op, x, y) {
  if (op == 'add') {
    add( x, y );
    stringAns = x.toString().concat(' + ', y.toString(), ' = ', ans.toString());
    console.log( stringAns );
    return ans;
  }  else if (op == 'subtract') {
    subtract( x, y );
    stringAns = x.toString().concat(' - ', y.toString(), ' = ', ans.toString());
    console.log( stringAns );
    return ans;
  }  else if (op == 'multiply') {
    mulitply( x, y );
    stringAns = x.toString().concat(' * ', y.toString(), ' = ', ans.toString());
    console.log( stringAns );
    return ans;
  }  else if (op == 'divide' ) {
    divide( x, y );
    stringAns = x.toString().concat(' / ', y.toString(), ' = ', ans.toString());
    console.log( stringAns );
    return ans;
  }  else
    console.log('error')
}

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

function isGreaterThan ( a, b ) {
  bool = false;
  if ( a > b) {
    return bool = true
  }
  return bool
}

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

function isLessThan( a, b ) {
  bool = false;
  if ( a < b) {
    return bool = true
  }
  return bool
}

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

function areEqual( a, b ) {
  bool = false;
  if ( a === b) {
    return bool = true
  }
  return bool
}

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

function minimum( x, y ) {
  if ( isLessThan( x, y ) ) {
    return x
  }
  return y
}

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

function maximum( x, y ) {
  if ( isGreaterThan( x, y ) ) {
    return x
  }
  return y
}

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

function isEven( num ) {
  bool = false;
  if ( num % 2 === 0) {
    return bool = true
  }
  return bool
}

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

function isOdd( num ) {
  bool = false;
  if ( num % 2 !== 0) {
    return bool = true
  }
  return bool
}

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

function letterGrade( score, maxScore ) {
  var percent = score / maxScore;
  var grade = 'X';
  switch ( true ) {
    case (percent >= .90 ):
      grade = 'A';
      break;
    case (percent >= .80 ):
      grade = 'B';
      break;
    case (percent >= .70 ):
      grade = 'C';
      break;
    case (percent >= .60 ):
      grade = 'D';
      break;
    case (percent <= .59 ):
      grade = 'F';
      break;
    case (percent > 1 ):
      grade = 'Error';
      break;
    case (percent < 0 ):
      grade = 'Error';
      break;
    case undefined:
      break;
    default:
      break;
  }
  return grade;
}

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */

function incrementReviews ( restaurant ) {
  var totalreviews = 1;
  if ( 'reviews' in restaurant ) {
    totalreviews = restaurant.reviews += 1;
    return restaurant
  }  else {
    restaurant.reviews = totalreviews;
    return restaurant
  }
};

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

function combine ( word1, word2 ) {
  return word1.concat(' ', word2);
}

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

function createCircle ( radius ) {
  return circle = {
    circumference : 2 * Math.PI * radius,
    area : Math.PI * square(radius)
  }
}

