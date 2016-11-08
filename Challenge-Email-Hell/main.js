var emailArray = require( './emailLog.json' ).emails;
var emailDupes = require( './emailHell.js' );

var result = emailDupes( emailArray ).getDupes();

console.log( result );