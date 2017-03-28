const emailArray = require( './emailLog.json' ).emails;
const emailDupes = require( './emailHell.js' );

const result = emailDupes( emailArray ).getDupes();

console.log( result );