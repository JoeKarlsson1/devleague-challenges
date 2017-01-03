var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home', {
      isAdmin: true,
      username: 'JoeJoeBinks3',
      people: [
        'Jay',
        'Tyler',
        'Estefania',
      ],
      helpers: {
            foo: function () {
              return 'foo helper.';
            }
        },
    });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});