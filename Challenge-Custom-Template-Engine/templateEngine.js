'use strict'

const fs = require('fs');

//expandable template engine
module.exports = function templatingEngine(filePath, options, callback) {

  fs.readFile(filePath, function (err, content) {
    if (err) {
      return callback(new Error(err));
    }

    var rendered = content;

    //Loop through all of the words passed in
    for (var key in options) {
      if (
          key !== 'settings' &&
          key !== '_locals' &&
          key !== 'cache'
      ) {

        //replace that term
        // var word = '$$' + key + '$$'
        // var re = new RegExp(word, 'gi');
        rendered = rendered.toString().replace('$$' + key + '$$', options[key]);

      }

    }

    return callback(null, rendered);
  })
}