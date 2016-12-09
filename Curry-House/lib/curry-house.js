var curry = require('./curry');

function calculate (a) {
  return function(op) {
    switch (op){
      case '+':
      case 'add':
        return function(b) {
          return a + b;
        };
      case '-' :
      case 'subtract' :
        return function(b) {
          return a - b;
        };
      case '*' :
      case 'multiply':
        return function(b) {
          return a * b;
        };
      case '/' :
      case 'divide':
        return function(b) {
          return a / b;
        };
      case '%' :
      case 'modulo':
        return function(b) {
          return a % b;
        };
      case '^' :
      case 'power of':
        return function(b) {
            return Math.pow(a, b);
          };
    };
  };
};

function random (a) {
  return {
    to : function(b) {
      return Math.floor(Math.random() * (b - a) + a);
    },
    toInclude : function(b) {
      return Math.floor(Math.random() * (b - a + 1) + a);
    }
  };
};

function concat(a,b) {
  return String(a) + String(b);
}

var prependGreeting = curry(concat, 'Hello ');

function add (a,b,c) {
  return a + b + c;
}

var add4and5 = curry(add, 4, 5);

function calculator(operation) {
  return function(op2,op1) {
    switch (operation){
      case '+':
      case 'add' :
        return op1 + op2;
      case '-' :
      case 'subtract' :
        return op1 - op2;
      case '*' :
      case 'multiply' :
        return op2 * op1;
      case 'divide' :
      case '/' :
        return op1 / op2;
      case '%' :
      case 'modulo' :
        return op1 % op2 ;
      case '^' :
      case 'power of':
        return Math.pow(op1, op2);
    }
  };
}

var add5 = curry(calculator('+'), 5);
var sub5 = curry(calculator('-'), 5);;
var multiply5 = curry(calculator('*'), 5);
var divide5 = curry(calculator('/'), 5);
var mod5 = curry(calculator('%'), 5);
var pow3 = curry(calculator('^'), 3);

module.exports = {
  calculate : calculate,
  random : random,
  prependGreeting : prependGreeting,
  add4and5 : add4and5,
  calculator : calculator,
  add5 : add5,
  sub5 : sub5,
  multiply5 : multiply5,
  divide5 : divide5,
  mod5 : mod5,
  pow3 : pow3
};