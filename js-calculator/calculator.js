/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
var calculatorModule = (function() {
  // Private
  var _memory = 0;
  var _total = 0;

  function isNum( x ) {
    if ( typeof x !== 'number') {
      throw new Error('Not a number, plz try again');
    }
  };

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
  function load(x) {
    debugger;
    isNum(x);
    _total = x;
    return _total;
  };

  /**
   * Return the value of `total`
   * @return { Number }
   */
  function getTotal() {
    return _total;
  };

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
  function add(x) {
    isNum(x);
    _total += x;
    return getTotal;
  };

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
  function subtract(x) {
    isNum(x);
    _total -= x;
    return _total;
  };

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
  function multiply(x) {
    isNum(x);
    _total *= x;
    return _total;
  };

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
  function divide(x) {
    isNum(x);
    _total /= x;
    return _total;
  };

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
  function recallMemory() {
    return _memory;
  };

  /**
   * Stores the value of `total` to `memory`
   */
  function saveMemory() {
    _memory = _total;
    return _memory;
  };

  /**
   * Clear the value stored at `memory`
   */
  function clearMemory() {
    _memory = 0;
    return _memory;
  };

  // Public
  return {
    load,
    getTotal,
    add,
    subtract,
    multiply,
    divide,
    recallMemory,
    saveMemory,
    clearMemory
  }
});

  var myCalc = calculatorModule();
myCalc.load(100);
console.log(myCalc.getTotal());