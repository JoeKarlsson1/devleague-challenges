//recursive implementation of Bubble Sort

const bubbleSort = ( arr ) => {
  let pass = false;

  for ( let i = 0; i < arr.length; i++ ) {
    if ( arr[i] > arr[i+1] ) {
      swap( arr, i, i+1 );
      pass = true;
    }
  }

  // base case
  if ( !pass ) {
    return arr
  }
  // recursive call
  return bubbleSort( arr );;
};

const swap = ( arr, i1, i2 ) => {
  let tmp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = tmp;
};

const result1 = bubbleSort( [5,1,4,2,8] );
const result2 = bubbleSort( [4,2,4,1,1,5] );
const result3 = bubbleSort( [1,1,1,1,1,1,1,1,1,1] );

console.log( result1 );
console.log( result2 );
console.log( result3 );