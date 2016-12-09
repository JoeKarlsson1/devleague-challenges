const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const books = require('./routes/books');
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/books', books);

app.get('/', (req, res) => {
  res.send('Hello Client');
});

app.put('/', (req, res) => {
  res.send('put it in the bucket')
});

app.get('/catbutts', (req, res) => {
  res.send('Hello cat butts');
});

app.route('/movie')
  .get((req, res) => {
    res.send('retreived a movie - fight club');
  })
  .post((req, res) => {
    res.send('posted a new movie');
  })
  .put((req, res) => {
    res.send('updated movie title');
  })
  .delete((req, res) => {
    res.send('Deleted a movie');
  })

const server = app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});