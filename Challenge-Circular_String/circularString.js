'use strict'

const circularString = ( source, find ) => {
  if (
    typeof( source ) !== 'string' ||
    typeof( find ) !== 'string'
  ) {
    throw new Error('input must be a string');
  }
  let sourceCirc = source;

  // If the find string is larger than the source - we need toi increase the number of times we loop source.
  const numCircles = Math.ceil( find.length / source.length ) + 1;
  // Beef up the cicrular string to handle any strong size.
  for ( let i = 0; i <= numCircles; i++ ) {
    sourceCirc += source
  }
  if ( (sourceCirc.toLowerCase()).search( find.toLowerCase() ) === -1 ) {
    return false;
  }
  return true;
}

console.log(circularString('Hotdog', 'dog')); // True
console.log(circularString('Assignments', 'sass')); //True
console.log(circularString('Assignments', 'sassy')); //False
console.log(circularString('Assignments', 'AssignmentsAssignmentsAssignmentsAssignmentsAssignments')); //True