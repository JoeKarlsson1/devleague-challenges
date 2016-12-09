/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each
 *  multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *  the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits) {
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  // Temp variobles
  var ord = null;
  var rev = null;

  if (digits < 3) {
    for (var i = 10; i < 100; i++) {
      for (var x = i; x < 100; x++) {
        ord = x * i;
        rev = ord.toString().split('').reverse().join('');
        if (ord == rev && palindromeNumber < ord) {
          factor_0 = i;
          factor_1 = x;
          palindromeNumber = ord;
        } // ends if
      } // ends x loop
    } // ends i loop

    return {
      factor_0 : factor_0,
      factor_1 : factor_1,
      palindromeNumber : palindromeNumber
    };

  } // ends if(digits < 3)
  else {
    for (var j = 99; j < 999; j++) {
      for (var k = j; k < 999; k++) {
        ord = k * j;
        rev = ord.toString().split('').reverse().join('');
        if (ord == rev && palindromeNumber < ord) {
          factor_0 = j;
          factor_1 = k;
          palindromeNumber = ord;
        } // ends if
      } // ends k loop
    } // ends j loop

    return {
      factor_0 : factor_0,
      factor_1 : factor_1,
      palindromeNumber : palindromeNumber
    };
  }
};