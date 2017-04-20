const isBalanced = (str) => {
  let stack = [];
  let open  = ['[','<','(', '{'];
  let close = [']','>',')', '}'];

  let arr = str.replace(/[^\(\)\<\>\[\]]/g,'').split(''); //brackets only
  // must be an even pair - unbalanced
  if (arr.length % 2 !== 0) {
    return false;
  }

  // if the arr is empty - balanced
  if (arr.length === 0) {
    return true;
  }

  for (let i=arr.length-1; i>=0; i--){
    if (close.indexOf(arr[i]) >= 0 ) //check if it is a closing bracket
      stack.push(arr[i]);
    else {  // if bracket match, then pop off stack array
      if (open.indexOf(arr[i]) !== close.indexOf(stack[stack.length-1])) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  // if the stack has values in it - return false
  if ( stack.length > 0 ) {
    return false;
  }
  return true
};

console.log(isBalanced('<>[ccg[<a>]]b([09])'));   // true
console.log(isBalanced('<[[<>>]]([])'));          // false
console.log(isBalanced('][<>]]([])'));            // false
console.log(isBalanced('foo(bar);'));             // true
console.log(isBalanced('(){}<>[]'));              // true