function replaceWords(blacklist) {
  return function(req, res, next) {
    var message = req.body.message;
    Object.keys(blacklist).forEach(function(key) {
      var re = new RegExp(key, 'gi');
      message = message.replace(re, blacklist[key]);
    });
    req.body.message = message;
    next();
  };
}

module.exports = replaceWords;