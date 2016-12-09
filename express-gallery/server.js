const express = require('express');
const app = express();
const CONFIG = require('./config/config.json');
const jade = require('jade');
const db = require('./models');
const User = db.User;
const passport = require('passport');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const gallery = require('./routes/gallery');
const register = require('./routes/register');
const root = require('./routes/root');
const methodOverride = require('method-override');
const LocalStrategy = require('passport-local').Strategy;

// using jade templating
app.set('view engine', 'jade');
app.set('views', './views');

// static html files in public directory
app.use(express.static('./public'));

// using express sessions for user authentication
app.use(session(
  {
    store: new RedisStore(),
    secret : CONFIG.SESSION.secret,
    resave : false,
    saveUninitialized : true
  }
));

// parsing for http requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(methodOverride((req, res) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user);
    });
});

// local strategy checks our local DB to authenticate users
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ where : { username : username } })
      .then((user) => {
        if (!user) {
          return done(null, false, { message : 'Incorrect username' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message : 'Incorrect password' });
        }
        return done(null, user);
      });
  }
));

app.use('/', root);
app.use('/gallery', gallery);
app.use('/register', register);

app.get('/404', (req, res) => {
  res.render('404');
});
app.all('*', (req, res ) => {
  res.redirect('/404');
});

const server = app.listen(process.env.PORT || 3000, function() {
  console.log('Server started on 3000');
  // sync our database on startup
  // db.sequelize.sync();
});