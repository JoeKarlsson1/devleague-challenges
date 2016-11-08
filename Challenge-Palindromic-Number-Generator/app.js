'use strict'

const palindromicNumberGenerator = (num) => {
  let steps = 0;

  if(num < 0) {
    return {
      value: null,
      steps: steps,
    };
  };
  while(!isPalindrome(num)) {
    num += reverseNum(num);
    steps++;
  };
  return {
    value: num,
    steps: steps
  };
};

const isPalindrome = (num) => {
  if(num === reverseNum(num)) {
      return true;
  };
  return false;
};

const reverseNum = (num) => {
  var n = num;
  var rev = 0;

  while(n > 0) {
    rev = rev * 10 + n % 10;
    n = Math.floor(n / 10);
  };
  return rev;
};

console.log(palindromicNumberGenerator(87));
console.log(palindromicNumberGenerator(1331));
