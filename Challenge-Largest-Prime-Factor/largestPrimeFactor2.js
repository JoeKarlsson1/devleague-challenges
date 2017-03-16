'use strict';

const isDivisible = ( n, divider ) => {
  return n % divider === 0;
};

const isPrime = ( value ) => {
  if ( value === 2 ) {
    return true;
  }
  for ( let i = 2; i < value; i++ ) {
    if ( value % i === 0 ) {
      return false;
    }
  }
  return true;
};

// A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself
// Prime factors are prime numbers that divide that integer exactly.
exports.largestPrimeFactor = function( n ) {
  let lrgestPrimeFactor;
  let i = 2;

  while ( i <= n ) {
    if ( isDivisible( n,  i ) && isPrime( i ) ) {
      lrgestPrimeFactor = i;
    }
    i++;
  }

  return lrgestPrimeFactor;
};
