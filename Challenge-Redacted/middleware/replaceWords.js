const replaceWords = ( blacklist ) => {
  return ( req, res, next ) => {
    let { message } = req.body;
    Object.keys( blacklist ).forEach(( key ) => {
      const re = new RegExp( key, 'gi' );
      message = message.replace( re, blacklist[key] );
    });
    req.body.message = message;
    next();
  };
};

module.exports = replaceWords;
