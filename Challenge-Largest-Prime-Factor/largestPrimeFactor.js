'use strict'

// A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself
// Prime factors are prime numbers that divide that integer exactly.

/* here is an alternative, and faster solution than brute forcing. However, it turned out to work well enough for this problem.

We can use the Fundamental Theorem of Arithmetic which states:
Any integer greater than 1 is either a prime number, or can be written as a unique product of prime numbers (ignoring the order).

Example:
The number 12.
We start with the smallest prime number (2).
12/2 = 6, which means that 2 is a prime factor to 12.
We try again to divide the remainder with 2 again:
6/2 = 3. Three is a prime number as well, so we now have the complete factorization which is`
Prime factorization of 12 is 2,2,3 and we can check that 2*2*3=12.


We make a logical short cut here and realise that we don’t need to find all prime numbers first, we can “just” enumerate through all numbers until we have a complete factorization if we start from below, since all non-prime factors will already be factorized in primes, as a consequence of the proof given in the link to the theorem. Lets write some code shall we.
*/

exports.largestPrimeFactor = function( n ) {
  let newnumm = n;
  let largestFact = 0;

  let counter = 2;
  while (counter * counter <= newnumm) {
      if (newnumm % counter == 0) {
        newnumm = newnumm / counter;
        largestFact = counter;
      } else {
        counter++;
      }
  }
  if (newnumm > largestFact) { // the remainder is a prime number
    largestFact = newnumm;
    console.log(largestFact);
  }

  return largestFact;
}