const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.send('retreived a book - Harry Potter');
  })
  .post((req, res) => {
    console.log('req.body: ', req.body);
    res.send('posted a new book');
  })
  .put((req, res) => {
    res.send('updated book title');
  })
  .delete((req, res) => {
    res.send('Deleted a book');
  })

router.get('/:id', (req, res) => {
  console.log('req.params.id: ', req.params.id);
  res.json({
    success: true,
    id: req.params.id,
  });
})

module.exports = router;
