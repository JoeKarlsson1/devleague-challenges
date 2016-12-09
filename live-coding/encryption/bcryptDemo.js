const bcrypt = require('bcrypt');

// salt rounds = the cost of processing the data
const saltRounds = 10;
const plainTextPassword = 't0pS3cr3t'
const otherPlainTextPassword = 'bacon_pancakes'

bcrypt.genSalt(saltRounds, (err, salt) => {
  bcrypt.hash(plainTextPassword, salt, (err, hash) => {
    // Store the hash in the DB
    console.log('hash: ', hash);

    //load the hashed password from the DB
    bcrypt.compare(plainTextPassword, hash, (err, res) => {
      // res === true
      console.log(res)
    })
    bcrypt.compare(otherPlainTextPassword, hash, (err, res) => {
      // res === false
      console.log('false', res)
    })
  })
})
