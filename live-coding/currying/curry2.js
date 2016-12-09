function curry(fn) {
  //The arguements object is not a real object
  // but we can convert it into a real arry
  let args = Array.prototype.slice.call(arguments, 1);

  return function () {

    // passes through the args and context to the returned function
    return fn.apply(this, args.concat(
      Array.prototype.slice.call(arguments, 0)
    ));
  };
};

const concat = ( head, tail ) => {
  return head + tail;
};

const greet = curry( concat ,'Hello ' );

console.log(greet('Jason')); // Hello Jason