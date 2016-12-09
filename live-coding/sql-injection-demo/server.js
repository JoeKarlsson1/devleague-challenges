'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'has_many_blogs',
  user: 'joecarlson'
});

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

app.post('/article', (req, res) => {

  // someone thought they could be smart by making a "dynamic" select statement
  // Not Safe!
  db.query(`SELECT * FROM ${req.body.tableName}`)

  // safe!
  // db.query('SELECT * FROM $1~', [`${req.body.tableName}`])
    .then((query) => {
      console.log(query)
      res.send(query)
    })
    .catch((e) => {
      console.error(e);
      res.send(e)
    })
});

app.get('/articles', (req, res) => {
  res.render('articles/index')
});

app.listen(8082, _ => {
  console.log('Server started.')
});
