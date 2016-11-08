module.exports = function( log ) {
  console.log('log: ', log);
  var module = {};

  module.getDupes = function() {
    var result = {};

    for (var i = 0; i < log.length; i++) {
      if ( result.hasOwnProperty( log[i].email ) === false ) {
        result[ log[i].email ] = 0;
      }
      result[ log[i].email ]++;
    }
    return result;
  }
  return module;
}