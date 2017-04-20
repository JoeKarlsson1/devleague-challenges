/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(str) {
  let len;
  // Regex to remove facing pairs
  let reduceRegExp = /(\[\])|(\(\))|(<>)|({})/g;

  // remove all non parentheses
  str = str.replace(/[^\[\]\(\)<>]+/g,"");
  // no braces balanced
  if (str.length === 0) {
    return true;
  }
  // odd length then not balanced.
  if (str.length % 2) {
    return false;
  }
  // Remove facing pairs until there are no more to remove.
  do {
    len = str.length;
    // remove all facing pairs
    str = str.replace(reduceRegExp, "");
  } while (len !== str.length);
  // Balanced and good. :)
  if (str.length === 0) {
    return true;
  }
  // UnBalanced and bad. :(
  return false;
};

console.log(isValid('<>[ccg[<a>]]b([09])'));   // true
console.log(isValid('<[[<>>]]([])'));          // false
console.log(isValid('][<>]]([])'));            // false
console.log(isValid('foo(bar);'));             // true
console.log(isValid('(){}<>[]'));              // true
