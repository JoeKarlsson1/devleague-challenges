const calculator = (num) => {
  let equation = [];

  const captureNumber = (num) => {
    equation.push(num);
    return captureOperator;
  }

  const captureOperator = (op) => {

    if (op === '=') {
      return processEquation(equation);
    }

    equation.push(op);
    return captureNumber;
  }

  const processEquation = (eqArr) => {
    let lastNumSeen = null;
    let lastOpSeen = null;

    return eqArr.reduce((sum, curr, index) => {

      if (!index) {
        return sum + curr;
      }

      if (typeof(curr) === 'number') {
        switch(lastOpSeen) {
          case '+': return sum + curr;
          case '-': return sum - curr;
          default: console.log('defaulted', curr);
        }

        lastOpSeen = null;
        return sum;
      }

      if (typeof(curr) === 'string') {
        lastOpSeen = curr;
        return sum;
      }
    }, 0);
  }

  return captureNumber(num);
}

// code commented out is equivalent to line 60
// var getNextOp = calculator(1);
// var getNextNum = getNextOp('+');
// getNextOp = getNextNum(1);
// getNextNum = getNextOp('-');
// getNextOp = getNextNum(1);
// getNextNum = getNextOp('+');
// getNextOp = getNextNum(10);
// var result = getNextOp('=');

var result = calculator(5)('+')(1)('-')(1)('+')(10)('=');
console.log(result); //15
