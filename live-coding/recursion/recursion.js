const factorial = ( num ) => {
  //base case
  if(num === 1){
    return 1;
  }
  return num * factorial(--num);
}

console.log(factorial(4)); //24