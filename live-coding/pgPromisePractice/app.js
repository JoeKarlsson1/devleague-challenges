const express = require('express');
const app = express();
const Promise = require('bluebird');

const pgp = require('pg-promise')({promiseLib: Promise});

const cn = {
    host: 'localhost', // Server name or IP address
    port: 5432, // Default port for PostgreSQL
    database: 'pgpromisepractice',
    user: 'joecarlson'
};

const db = pgp(cn);

db.query('INSERT INTO users VALUES (DEFAULT, $1)', ['joejoebinks13'])
  .then(console.log)
  .catch((err) => {
    console.error(err);
  });

db.query('SELECT * FROM users')
  .then(console.log)
  .catch((err) => {
    console.error(err);
  });

app.listen(3000, function() {
  console.log('Server has started on port 3000');
});