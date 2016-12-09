
'use strict';

/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

var calculator = (function () {
  //Private variables
  var total = 0;
  var inputDump;

  //Private function to check if a number is string. Used for error handling.
  function isANumber ( input ) {
    if (typeof input === 'number') {
      return true;
    }
    return false;
  }

  function isAOperator ( input ) {
    var re = new RegExp('/[\+\-\*\%]/');

    if ( re.match(input) ) {
      return true
    }
    return false
  }

  function inputParser ( input ) {
    var evalArray;
    var number;
    var i;
    for ( i = 0; i < inputDump.length; i++ ) {
      if (isANumber(inputDump[i])) {
        number += inputDump[i];
      }      else {

      }
    }
  }

  return {
    //Public variables

    /**
    * sets the `total` to the number passed in
    * @param  { Number } x
    * @return { Number }    current total
    */
    load : function ( num ) {
      if (isANumber(num)) {
        total = num;
        return total;
      }
      return 'Not a number!';
    },
    /**
    * Return the value of `total`
    * @return { Number }
    */
    getTotal : function () {
      return total;
    },
    /**
    * Sums the value passed in with `total`
    * @param { Number } x
    */
    add : function ( num ) {
      total += num;
      return total;
    },
    /**
    * Subtracts the value passed in from `total`
    * @param  { Number } x
    */
    subtract : function ( num ) {
      if (isANumber(num)) {
        total -= num;
        return total;
      }
      return 'Not a number!'
    },
    /**
    * Multiplies the value by `total`
    * @param  { Number } x
    */
    multiply : function ( num ) {
      if (isANumber(num)) {
        total *= num;
        return total;
      }
      return 'Not a number!'
    },
    /**
    * Divides the value passing in by `total`
    * @param  { Number } x
    */
    divide : function ( num ) {
      if (isANumber(num)) {
        total /= num;
        return total;
      }
      return 'Not a number!'
    },
    /**
    * Return the value stored at `memory`
    * @return { Number }
    */
    recallMemory : function () {
      return memory;
    },
    /**
    * Stores the value of `total` to `memory`
    */
    saveMemory : function () {
      memory = total;
    },
    /**
    * Clear the value stored at `memory`
    */
    clearMemory : function () {
      memory = 0;
    }
  };
}) ;restart

var newCalc = calculator();

function isAOperator ( input ) {
  var re = new RegExp('/[\+|\-|\*]/');
  if ( input.match(re)) {
    return true
  } else {
    return false
  }
}

var testInput = '+'
var re = new RegExp('/[\\+\\-\\*\\%]/', 'g');
console.log(testInput.match(re));

console.log(isAOperator('+'));

