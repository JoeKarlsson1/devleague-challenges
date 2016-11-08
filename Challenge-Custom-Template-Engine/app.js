var express = require('express');
var app = express();

//Import our DIY template engine
var templateEngine = require('./templateEngine.js');

//define app engine
app.engine('joe', templateEngine);

//specify views directory
app.set('views', './views');

//register template engine
app.set('view engine', 'joe');

app.get('/', function(req, res, next) {
  res.render(
    //filepath
    'index',
    //options - this what we will replace in our temaplte
    {
      title : 'Templating Exercise',
      message : ' Hello World',
      name : 'Joe'
    }
  )
})


app.listen(6969, function() {
  console.log('Server started on 6969')
});