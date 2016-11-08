module.exports = chirp;

var chirp = function (n, word) {
  if (typeof n !== 'number' || typeof word !== 'string') {
    throw new TypeError('Invalid input type');
  }
  if (n < 1 ) {
    throw new Error('Input number must be greater than 1');
  }
  if (n === 1) {
    return word;
  }
  return chirp(n - 1, word) + ' ' + word;
}

console.log(chirp(3, 'shit'));