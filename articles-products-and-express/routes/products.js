var Products = require('./../db/products.js');
var path = require('path');
var express = require('express');
var router = express.Router();
var fs = require('fs');
//NOTE WE MUST USE FS TO WRITE TO A FILE
//FS.APPENDFILE

//MIDDLEWARE
router.use(function(req, res, next) {
  var date = new Date();
  var reqMethod = req.originalMethod;
  var reqUrl = req.originalUrl;
  var reqHeaders = req.headers;
  var detailsArray = [];

  var logData = {
    METHOD : reqMethod,
    URL : reqUrl,
    TIMESTAMP : date,
    HEADERS : reqHeaders
  };

  detailsArray.push( logData );

  var fileName = new Date();
  var day = fileName.getDate();
  var month  = fileName.getMonth() + 1;
  var year = fileName.getFullYear() + ".log";

  var fullDate = month + '-' + day + '-' + year;

  //if file not created
  if (!fs.access ('../logs' + fullDate, function (err) {

    // if (err) {
    for(var i = 0; i < detailsArray.length; i++ ) {
      return fs.writeFile( path.join(process.cwd(), 'logs', fullDate), JSON.stringify(detailsArray) , function (err) {
        if (err) {
          return new Error( 'Can\'t write file!' );
        }
        next();
      });
    }
  // }
    // return fs.appendFile( '../logs' + fullDate, JSON.stringify(logData), function (err) {
    //   if (err) {
    //     return new Error( 'log error' );
    //   }
    //   next();
    // });
  })); // end of if (!fs.access ('../lo
}); // end of router.use(functio


// end middleware
router.route('/')
  .get(function(req, res) {
    res.render('products/index', {
      products: Products.all()
    });
  })

  .post(function (req, res) {
    Products.add(req.body, function(err) {
      if(err) return res.send( {success: false, message: err.message} );

      return res.redirect('/products/');
    });
  })
;

router.route('/new')
  .get(function(req, res) {
    res.render('products/new');
  });

router.route('/:id/edit')
  .get(function(req, res) {
    res.render('products/edit', {
      item: Products.getById( req.params.id )
    });
  });


router.route('/:id')
  .get(function(req, res) {
    res.render('products/single', {
      item: Products.getById( req.params.id )
    });
  })
  .put(function (req, res) {
    Products.editById( req.params.id, req.body, function(err) {
      if(err) return res.send({success: false, message: err.message});

      return res.redirect('/products/' + req.params.id);

    });
  })
  .delete(function (req, res) {
    Products.deleteById( req.params.id, function(err) {
      if(err) return res.send({success: false, message: err.message});

      return res.redirect('/products/');

    });
  })
  ;


module.exports = router;
