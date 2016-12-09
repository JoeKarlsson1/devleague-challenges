require('./index.js');
const Promise = require('bluebird');
const Mongoose = Promise.promisifyAll(require('mongoose'));
Mongoose.Promise = require('bluebird');

const ContactSchema = Mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  Message: String,
});

let Contact = Mongoose.model('Contact', ContactSchema);

export default Contact;
