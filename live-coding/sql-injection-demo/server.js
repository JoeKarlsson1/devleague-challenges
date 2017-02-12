'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'articles_products_db',
  user: 'joe',
  password: 'postgres',
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

app.listen(3000, _ => {
  console.log('Server started.')
});
