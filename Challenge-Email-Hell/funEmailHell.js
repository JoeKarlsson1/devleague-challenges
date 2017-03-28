const log = require( './emailLog.json' ).emails;

const dupes = log.reduce(( duplicates, currentEmail ) => {
  if ( duplicates.hasOwnProperty( currentEmail.email ) === false) {
    duplicates[ currentEmail.email ] = 0;
  }
  duplicates[ currentEmail.email ]++;
  return duplicates;
}, {});

console.log( dupes );

// // Another variation
// const repeats = log
//   .reduce((prev, {email}) => {
//     prev[email] = (prev[email] | 0) + 1;
//     return prev;
//   }, {});