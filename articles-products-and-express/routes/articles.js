var Articles = require('./../db/articles.js');
var express  = require('express');
var router   = express.Router();
var fs       = require('fs');
//NOTE WE MUST USE FS TO WRITE TO A FILE
//FS.APPENDFILE

//MIDDLEWARE
router.use(function(req, res, next) {
  var date = new Date();
  var reqMethod = req.originalMethod;
  var reqUrl = req.originalUrl;
  var reqHeaders = req.headers;

  var logData = {
    METHOD : reqMethod,
    URL : reqUrl,
    TIMESTAMP : date,
    HEADERS : reqHeaders
  };

  var fileName = new Date() + ".log";

  return fs.appendFile( path.join(process.cwd(), 'logs', fileName), JSON.stringify(logData), function (err) {
    if (err) {
      return new Error( 'Can\'t write file!' );
    }
    next();
  });
});


// end middleware

router.route('/')
  .get(function(req, res) {
    res.render('articles/index', {
      art: Articles.all()
    });
  })

  .post(function (req, res) {
    Articles.add(req.body, function(err) {
      if(err) return res.send( {success: false, message: err.message} );

      return res.redirect('/articles/');
    });
  })
;

router.route('/new')
  .get(function(req,res) {
    res.render('articles/new');
  });

router.route('/:title/edit')
  .get(function(req, res) {
    res.render('articles/edit', {
      articles: Articles.getByTitle( req.params.title )
    });
  });

router.route('/:title')
  .get(function(req, res) {
    res.render('articles/single', {
      articles: Articles.getByTitle( req.params.title)
    });
  })

  .put(function (req, res) {

    Articles.editByTitle( req.params.title, req.body, function(err) {
      if(err) return res.send({success: false, message: err.message});

      return res.redirect('/articles/' + req.body.title);
    });
  })

  .delete(function (req, res) {
    Articles.deleteByTitle( req.params.title, function(err) {
      if(err) return res.send({success: false, message: err.message});

      return res.redirect('/articles/');
  });
})
;

module.exports = router;
